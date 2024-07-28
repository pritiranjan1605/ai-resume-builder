import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection'
import ResumePreview from '../../components/ResumePreview'
import { Resumeinfocontext } from '@/context/Resumeinfocontact'
import Dummy from '../../../../data/Dummy'

const EditResume = () => {

const [resumeinfo,setresumeinfo] = useState();

    const params = useParams()
    useEffect(() => {
        setresumeinfo(Dummy)
      console.log(params)
    }, [])
    
  return (
    <Resumeinfocontext.Provider value={{resumeinfo,setresumeinfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      <FormSection/>
      <ResumePreview/>
    </div>
    </Resumeinfocontext.Provider>
  )
}

export default EditResume
 