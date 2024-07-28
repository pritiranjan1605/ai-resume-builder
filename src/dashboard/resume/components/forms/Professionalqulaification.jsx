import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useContext, useState,useEffect } from 'react'
import Richtexteditor from '../Richtexteditor'
import { Resumeinfocontext } from '@/context/Resumeinfocontact'

const formdata={
    title:'',
    companyname:'',
    city:'',
    state:'',
    startdate:'',
    enddate:'',
    summery:''
}

const Professionalqulaification = () => {
    const [experiencelist, setexperiencelist] = useState([formdata])
    const {resumeinfo,setresumeinfo} = useContext(Resumeinfocontext)
    const addmoreexperience =()=>{
        setexperiencelist([
            ...experiencelist,
            {
                title:'',
                companyName:'',
                city:'',
                state:'',
                startDate:'',
                endDate:'',
                summery:'',
            }
        ])
    }

    const removeexperience=()=>{
        setexperiencelist(experiencelist=>experiencelist.slice(0,-1))
    }
const handlerichtexteditor=(e,name,index)=>{
    const newentries = experiencelist.slice()
    newentries[index][name]=e.target.value
    setexperiencelist(newentries)
}
    const handlechange=(index,event)=>{
        const newentries = experiencelist.slice()
        const {name,value} = event.target
        newentries[index][name]=value
        setexperiencelist(newentries)

    }
useEffect(() => {
  setresumeinfo({
    ...resumeinfo,
    experience:experiencelist
  })
  
}, [experiencelist])

    
  return (
    <div>
        <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-top-4 mt-10"
      style={{
        borderTopColor: "#9f5bff",
        borderTopWidth: "10px",
        borderTopStyle: "solid",
      }}
    >
      <h1 className="font-bold text-lg">Professional Experience </h1>
      <p>Add your previous job experience</p>
      <div>
        {experiencelist.map((item,index)=>(
            <div key={index}>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                    <div>
                        <label className='text-xs' htmlFor="">Position Title </label>
                        <Input name='title' onChange={(event)=>{
                            handlechange(index,event)
                        }}/>
                    </div>
                    <div>
                        <label className='text-xs' htmlFor="">Company Name </label>
                        <Input name='companyname' onChange={(event)=>{
                            handlechange(index,event)
                        }}/>
                    </div>
                    <div>
                        <label className='text-xs' htmlFor="">City </label>
                        <Input name='city' onChange={(event)=>{
                            handlechange(index,event)
                        }}/>
                    </div>
                    <div>
                        <label className='text-xs' htmlFor="">State</label>
                        <Input name='state' onChange={(event)=>{
                            handlechange(index,event)
                        }}/>
                    </div>
                    <div>
                        <label className='text-xs' htmlFor="">Starting Date</label>
                        <Input type='date' name='startdate' onChange={(event)=>{
                            handlechange(index,event)
                        }}/>
                    </div>

                    <div>
                        <label className='text-xs' htmlFor="">Ending Date</label>
                        <Input type='date' name='enddate' onChange={(event)=>{
                            handlechange(index,event)
                        }}/>
                    </div>
                    <div className='col-span-2'>
                        <Richtexteditor  index={index} onrichtexteditorchange={(event)=>handlerichtexteditor(event,'worksummary',index)}/>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <div className='span-cols-2 flex justify-between'>
      <div className='gap-2 flex'>
      <Button className='flex gap-3 justify-center items-center text-primary' variant='outline' onClick={addmoreexperience}><PlusIcon/>Add More Experience</Button>
      <Button className='flex gap-3 justify-center items-center text-primary' variant='outline' onClick={removeexperience}><MinusIcon/>Remove Experience</Button>
      </div>
      <Button type="submit">Save</Button>
        
      </div>
      
      </div>
    </div>
  )
}

export default Professionalqulaification
