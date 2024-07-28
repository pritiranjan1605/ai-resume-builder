import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signinpage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <SignIn/>
    </div>
  )
}

export default Signinpage
