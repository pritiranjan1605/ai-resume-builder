import { UserButton, useUser } from '@clerk/clerk-react'
import React, { useEffect ,useState} from 'react'
import AddResume from './components/AddResume'
import GlobalAPI from './../../service/GlobalAPI'
import Resumecarditem from './components/Resumecarditem'

const Dashboard = () => {


  const [resumelist, setresumelist] = useState([])



  const {user} = useUser()
  useEffect(()=>{
    user&&getresumelist()
  },[user])
  const getresumelist= ()=>{
      GlobalAPI.Getuserresume(user?.primaryEmailAddress?.emailAddress).then(resp=>{
        console.log(resp.data)
        setresumelist(resp.data.data)
      })
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p>Start Creating AI resume for your next job role</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
            <AddResume/>
            {resumelist.length>0 && resumelist.map((resume,index)=>(
              <Resumecarditem resume={resume} key={index} />
            ))}
        </div>
    </div>
    
  )
}

export default Dashboard
