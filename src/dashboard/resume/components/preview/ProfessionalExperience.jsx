import React from 'react'

const ProfessionalExperience = ({resumeinfo}) => {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2' style={{
            color:resumeinfo?.themecolor
        }}>Professional Experience</h2>

        <hr style={{
            borderColor:resumeinfo?.themecolor
        }} />


        {resumeinfo?.experience.map((experience,index)=>(
            
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold ' style={{
            color:resumeinfo?.themecolor
        }}>{experience?.title}</h2>
                <h2 className='text-xs flex justify-between'>{experience?.companyname} , {experience?.city} , {experience?.state}<span>{experience?.startdate} TO {experience?.currentlyworking?"Present":experience?.enddate}</span></h2>

                {/* <p className='text-xs my-2'>{experience?.worksummary}</p> */}

                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.worksummary}}/>


            </div>
            
        ))}
      
    </div>
  )
}

export default ProfessionalExperience
