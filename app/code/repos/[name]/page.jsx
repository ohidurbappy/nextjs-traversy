import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'

const RepoPage = ({params:{name}}) => {
  return (
    <div className='card'>
      
        <Link className='btn btn-back' href='/code/repos'>Back to Repos</Link>
        <Repo name={name}/>

        <Suspense fallback={<div>Loading Directories</div>}>
        <RepoDirs name={name}/>
        </Suspense>




    </div>
  )
}

export default RepoPage