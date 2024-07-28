import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
    const {user,isSignedIn} = useUser();
    
  return (
    <div className='p-4 flex items-center justify-between shadow-md'>
      <img src="/logo.svg" width={100} height={100} alt="" />
      {isSignedIn ? <div className='flex justify-between items-center gap-4'>
        <Link to={'/dashboard'}><Button variant='outline' >Dashboard</Button></Link>
        <UserButton/>
      </div>:<Link to={'/auth/sign-in'}><Button>Get Started</Button></Link>}
      
    </div>
  )
}

export default Header
