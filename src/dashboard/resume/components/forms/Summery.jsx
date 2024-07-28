import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Resumeinfocontext } from "@/context/Resumeinfocontact";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalAPI from "./../../../../../service/GlobalAPI";
import { BrainCircuitIcon, LoaderIcon } from "lucide-react";
import { AIchatsession } from "./../../../../../service/Aimodels";
import { toast } from "sonner";




const Summery = ({enablenext}) => {
    const { resumeinfo, setresumeinfo } = useContext(Resumeinfocontext);

    const [summery, setsummery] = useState();
    const [loading, setloading] = useState(false)
    const [aigeneratedsummerylist, setaigeneratedsummerylist] = useState([])
    const prompt = "job title : {jobtitle} depends on job title give me a summery for my resume within 4-5 lines "

    const generatesummeryfromai = async ()=>{
        setloading(true)
        const PROMPT = prompt.replace('{jobtitle}',resumeinfo.jobtitle)
        console.log(PROMPT)
            const result = await AIchatsession.sendMessage(PROMPT)
            console.log(result.response.text())



            const parsedData = JSON.parse(result.response.text());

            if (parsedData.summary) {
                setaigeneratedsummerylist(parsedData); 
                setsummery(parsedData.summary)
                // Log only the summary
            } else {
                console.error("AI response is not in the expected format");
            }


            setloading(false)
            // setaigeneratedsummerylist(JSON.parse([result.response.text()]))
            // console.log(aigeneratedsummerylist.summary)
    }
  

  useEffect(() => {
    summery &&
      setresumeinfo({
        ...resumeinfo,
        summery: summery,
      });
  }, [summery]);
  const params = useParams();

  const onSave = (e) => {
    e.preventDefault();
    setloading(true);
    const data = {
      data:{
        summery:summery
      }
    };
    GlobalAPI.updateresumedetail(params.resumeid, data)
      .then((resp) => {
        console.log(resp);
        enablenext(true);
        setloading(false);
        toast("Summary  Updated");
      })
      .catch((error) => {
        setloading(false);
      });
  };

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-top-4 mt-10"
      style={{
        borderTopColor: "#9f5bff",
        borderTopWidth: "10px",
        borderTopStyle: "solid",
      }}
    >
      <h1 className="font-bold text-lg">Summary</h1>
      <p>Add Summary for your job title</p>

      <form onSubmit={onSave} className="mt-7">
        <div className="flex justify-between items-end">
          <label htmlFor="">Add Summary</label>
          <Button onClick={generatesummeryfromai} type="button"
            className="border-primary gap-2 text-primary "
            size="sm"
            variant="outline"
          ><BrainCircuitIcon/>
            Generate From AI
          </Button>
        </div>
        <Textarea 
          required value={summery}
          defaultValue={summery}
          onChange={(e) => {
            setsummery(e.target.value);
          }}
          className="mt-7 min-h-[240px]"
        />

        <div className="mt-2 flex justify-end">
        <Button disabled={loading} type="submit">
              {loading ? <LoaderIcon className="animate-spin" /> : "Save"}
            </Button>
        </div>
      </form>
      
      
    </div>
  );
};

export default Summery;
