import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Resumeinfocontext } from "@/context/Resumeinfocontact";
import { Loader2, LoaderIcon } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalAPI from "./../../../../../service/GlobalAPI";
import { toast } from "sonner";

const PersonalDetail = ({ enablenext }) => {
  const [formdata, setformdata] = useState();

  const [loading, setloading] = useState(false);

  const params = useParams();

  useEffect(() => {
    console.log(params.resumeid);
  }, []);

  const { resumeinfo, setresumeinfo } = useContext(Resumeinfocontext);

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    enablenext(false);
    setformdata({
      ...formdata,
      [name]: value,
    });

    setresumeinfo({
      ...resumeinfo,
      [name]: value,
    });
  };

  const onsave = (e) => {
    e.preventDefault();
    setloading(true);
    const data = {
      data: formdata,
    };
    GlobalAPI.updateresumedetail(params.resumeid, data).then((resp) => {
      console.log(resp);
      enablenext(true);
      setloading(false);
      toast("Details Updated")
    }).catch((error) => {
        setloading(false);
      });
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-top-4 mt-10" style={{borderTopColor:"#9f5bff",borderTopWidth:'10px',borderTopStyle:"solid"}}>
      <h1 className="font-bold text-lg">Personal Details</h1>
      <p>Get started with basic details</p>

      <form onSubmit={onsave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input name="firstname" defaultValue={resumeinfo?.firstname} required onChange={handleinputchange} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input name="lastname" defaultValue={resumeinfo?.lastname} required onChange={handleinputchange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input name="jobtitle" defaultValue={resumeinfo?.jobtitle} required onChange={handleinputchange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input name="address" defaultValue={resumeinfo?.address} required onChange={handleinputchange} />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input name="phone" defaultValue={resumeinfo?.phone} required onChange={handleinputchange} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input name="email" defaultValue={resumeinfo?.email} required onChange={handleinputchange} />
          </div>
          <div className="mt-3 flex justify-end col-span-2">
            <Button disabled={loading} type="submit">
              {loading ? <LoaderIcon className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
