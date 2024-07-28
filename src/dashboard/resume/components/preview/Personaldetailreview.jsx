import React,{useEffect} from 'react'

const Personaldetailreview = ({resumeinfo}) => {
   
    
    
  return (
    <div >
      <h2 className='font-bold text-center text-xl' style={{color:resumeinfo?.themecolor}}>{resumeinfo?.firstname} {resumeinfo?.lastname}</h2>
      <h2 className='text-center font-medium text-sm'>{resumeinfo?.jobtitle}</h2>
      <h2 className='text-center font-normal text-xs' style={{
        color:resumeinfo?.themecolor
      }}>{resumeinfo?.address}</h2>
      <div className='flex justify-between'>
        <h2 className='font-normal text-xs' style={{color:resumeinfo?.themecolor}}>{resumeinfo?.phone}</h2>
        <h2 className='font-normal text-xs' style={{color:resumeinfo?.themecolor}}>{resumeinfo?.email}</h2>
      </div>

      <hr className='border-[1.5px] my-2' style={{
        borderColor:resumeinfo?.themecolor
      }}/>
    </div>
  )
}

export default Personaldetailreview
