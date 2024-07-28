import { Resumeinfocontext } from '@/context/Resumeinfocontact'
import React, { useContext, useEffect } from 'react'
import Personaldetailreview from './preview/Personaldetailreview'
import Summarysection from './preview/Summarysection'
import ProfessionalExperience from './preview/ProfessionalExperience'
import EducationalPreview from './preview/EducationalPreview'
import Skillspreview from './preview/Skillspreview'

const ResumePreview = () => {
    const {resumeinfo,setresumeinfo} = useContext(Resumeinfocontext)
    
    
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeinfo?.themecolor}}>

      {/* personal details */}
<Personaldetailreview resumeinfo={resumeinfo}/>


      {/* summery */}
      <Summarysection resumeinfo={resumeinfo}/>



      {/* professional experience */}
      <ProfessionalExperience resumeinfo={resumeinfo}/>




      {/* educational */}
      <EducationalPreview resumeinfo={resumeinfo} />




      {/* skills */}
      <Skillspreview resumeinfo={resumeinfo} />



    </div>
  )
}

export default ResumePreview
