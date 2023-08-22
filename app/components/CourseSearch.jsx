'use client';
import {useState} from 'react'

const CourseSearch = ({setSearchResults}) => {

    const [query,setQuery] = useState('');


    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/api/courses/search?q=${query}`);
        const courses = await response.json();
        console.log(courses);
        setSearchResults(courses);
     
    }


  return (
    <form onSubmit={handleSubmit} className='search-form'>
        <input 
            type="text" 
            placeholder='Search for a course' 
            className='search-input' 
            value={query} 
            onChange={(e)=>setQuery(e.target.value)}/>
        <button className="search-button" type='submit'>
            Search
        </button>
    </form>
  )
}

export default CourseSearch