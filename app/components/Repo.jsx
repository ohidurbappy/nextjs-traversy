import React from 'react'
import { FaStar,FaCodeBranch,FaEye } from 'react-icons/fa';


async function fetchRepo(name){
    const res = await fetch(`https://api.github.com/repos/ohidurbappy/${name}`);
    const repo = await res.json();
    return repo;
}


const Repo =async ({name}) => { 

const repo = await fetchRepo(name);


  return (
    <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className='card-stats'>
        <div className="card-stat">
            <FaStar/>
            <p>{repo.stargazers_count}</p>
        </div>
        <div className="card-stat">
            <FaCodeBranch/>
            <p>{repo.forks_count}</p>
            </div>
            <div className="card-stat">
            <FaEye/>
            <p>{repo.watchers_count}</p>
            </div>

    </div>
    
    </>
  )
}

export default Repo