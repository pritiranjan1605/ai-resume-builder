import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
// import { title } from "process";
import { useUser } from "@clerk/clerk-react";
import GlobalAPI from './../../../service/GlobalAPI';
import { useNavigate } from "react-router-dom";
// import { error } from "console";

const AddResume = () => {

  const navigation = useNavigate()
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setloading] = useState(false)
  const [resumetitle, setresumetitle] = useState("");
  const {user}=useUser();
  const onCreate = () => {
    setloading(true)
    const uuid = uuidv4();
    const data={
      data:{
        title:resumetitle,
        resumeid:uuid,
        usersemail:user.primaryEmailAddress?.emailAddress,
        username:user?.fullName
      }
    }
    GlobalAPI.Createnewresume(data).then(resp=>{
      console.log(resp)
      if(resp){
        setloading(false)
        navigation('/dashboard/resume/'+resp.data.data.documentId+'/edit')
      }
    },()=>{
      setloading(false)
    })
  };
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md hover:cursor-pointer border-dotted"
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <PlusSquare />
      </div>
      <div className="mt-5 container m-auto  text-center  w-auto">
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Resume</DialogTitle>
              <DialogDescription>
                Add a title for your new resume
                <Input
                  className="mt-2"
                  placeholder="Ex. Full Stack Developer"
                  onChange={(e) => {
                    setresumetitle(e.target.value);
                  }}
                />
              </DialogDescription>
              <div className="flex justify-end gap-5 mt-3">
                <Button
                  onClick={() => {
                    setOpenDialog(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    onCreate()
                  }}
                  disabled={!resumetitle || loading}
                >
                  {loading?<Loader2 className="animate-spin"/>:'Create'}
                  
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddResume;
