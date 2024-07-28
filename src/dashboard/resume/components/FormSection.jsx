import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery'
import Professionalqulaification from './forms/Professionalqulaification'
import Education from './forms/Education'

const FormSection = () => {
    const [activeformindex,setactiveformindex] = useState(1)

    const [enablenext, setenablenext] = useState(false)
  return (
    <div>
        <div className='flex justify-between items-center  mb-[15px]'>
            <Button variant="outline" size="sm" className="flex gap-2"><LayoutGrid/>Theme</Button>
            <div className='flex gap-2 '>
                {activeformindex>1&&<Button size="sm" className='flex gap-2 ' onClick={()=>{
                    setactiveformindex(activeformindex-1)
                }}><ArrowLeft/>Previous </Button>}
                <Button disabled={!enablenext} size="sm" className='flex gap-2 ' onClick={()=>{
                    setactiveformindex(activeformindex+1)
                }}>Next <ArrowRight/></Button>
            </div>
        </div>
      {/* personal detail form */}
      {activeformindex==1?<PersonalDetail enablenext={(v)=>setenablenext(v)} />:null}
      

      {/* summary  */}
      {activeformindex==2?<Summery enablenext={(v)=>setenablenext(v)}/>:null}


      {/* professional qualification */}
      {activeformindex==3?<Professionalqulaification/>:null}



      {/* education */}
      {activeformindex==4?<Education />:null}



      {/* skills */}
    </div>
  )
}

export default FormSection
