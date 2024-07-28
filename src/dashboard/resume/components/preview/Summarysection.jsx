import React from 'react'

const Summarysection = ({resumeinfo}) => {
  return (
    <>
    <p className='text-xs'>
        {resumeinfo?.summery}
    </p>
    
     </>
  )
}

export default Summarysection
