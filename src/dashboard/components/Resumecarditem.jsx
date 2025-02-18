import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Resumecarditem = ({resume}) => {
  return (
    <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}> 
        <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary cursor-pointer'>
      <Notebook/>
    </div>
    <h2 className='text-center text-black   mt-[15px]'>{resume.title}</h2>
    </Link>
  )
}

export default Resumecarditem
