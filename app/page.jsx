'use client';
import {useState,useEffect} from 'react'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'
import Loading from './loading';


async function fetchCourses(){
  const response = await fetch('http://localhost:3000/api/courses');
  const courses = await response.json();
  return courses;
}




const HomePage = () => {

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
     fetchCourses().then((courses)=>{
      setCourses(courses);
      setLoading(false);
    })
  },[]);




  return (
    <>
      <h1>Courses</h1>
      <CourseSearch setSearchResults={(results)=>setCourses(results)} />
      {
        loading ? <Loading/> : <Courses courses={courses}/>
      }
    </>
  )
}

export default HomePage 