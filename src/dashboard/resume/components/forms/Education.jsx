import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Resumeinfocontext } from '@/context/Resumeinfocontact'
import { LoaderCircle, MinusIcon, PlusIcon } from 'lucide-react'
import React,{useState,useEffect,useContext} from 'react'

const Education = () => {
    const {resumeinfo,setresumeinfo} = useContext(Resumeinfocontext)
    const [educationlist, seteducationlist] = useState([{
        universityname:'',
        degree : '',
        major:'',
        startdate:'',
        enddate:'',
        description:''
    }])
    const [loading, setloading] = useState(false)
const handleonchange=(event , index)=>{
    const newentries = educationlist.slice()
    const {name,value} = event.target
    newentries[index][name]=value
    seteducationlist(newentries)
}
useEffect(() => {
  setresumeinfo({
    ...resumeinfo,
    education:educationlist
  })
}, [educationlist])

const addEducation=()=>{
    seteducationlist([...educationlist,{
        universityname:'',
        degree : '',
        major:'',
        startdate:'',
        enddate:'',
        description:''
    }])

}
const removeEducation=()=>{
    seteducationlist(educationlist=>educationlist.slice(0,-1))
}
const onSave=()=>{

}
  return (
        <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-top-4 mt-10"
      style={{
        borderTopColor: "#9f5bff",
        borderTopWidth: "10px",
        borderTopStyle: "solid",
      }}
    >
      <h1 className="font-bold text-lg">Educational Information </h1>
      <p>Add your Educational Details </p>
      <div>
        {educationlist.map((item,index)=>(
            <div key={index}>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5'>
                    <div className='col-span-2'>
                        <label htmlFor="">University Name</label>
                        <Input name='universityname' onChange={(event)=>handleonchange(event,index)} />
                    </div>
                    <div>
                        <label htmlFor="">Degree</label>
                        <Input name='degree' onChange={(event)=>handleonchange(event,index)} />
                    </div>
                    <div>
                        <label htmlFor="">Major</label>
                        <Input name='major' onChange={(event)=>handleonchange(event,index)} />
                    </div>
                    <div>
                        <label htmlFor="">Start Date</label>
                        <Input type="date" name='startdate' onChange={(event)=>handleonchange(event,index)} />
                    </div>
                    <div>
                        <label htmlFor="">End Date</label>
                        <Input type='date' name='enddate' onChange={(event)=>handleonchange(event,index)} />
                    </div>
                    <div className='col-span-2 gap-2'>
                        <label className='mb-5'>Description</label>
                        <Textarea onChange={(event)=>handleonchange(event,index)} name="description"/>
                    </div>
                </div>
                
            </div>
        ))}
      </div>
      <div className='span-cols-2 flex justify-between mt-5'>
      <div className='gap-2 flex'>
      <Button onClick={addEducation} className='flex gap-3 justify-center items-center text-primary' variant='outline' ><PlusIcon/>Add Qualification</Button>
      <Button onClick={removeEducation} className='flex gap-3 justify-center items-center text-primary' variant='outline' ><MinusIcon/>Remove Qualification</Button>
      </div>
      <Button disabled={loading} onClick={()=>onSave()}>{loading?<LoaderCircle className='animate spin' />:"Save"}</Button>
        
      </div>
    </div>
    
  )
}

export default Education
