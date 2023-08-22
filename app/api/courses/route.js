import { NextResponse } from "next/server";
import courses from "./data.json"
import { v4 as uuid4 } from 'uuid';


export async function GET(request){
    return NextResponse.json(courses);
}


export async function POST(request){
    const {
        title,
        description,
        level,
        link
    }=await request.json();

    
    const newCourse = {
        id:uuid4(),
        title,
        description,
        level,
        link
    }

    courses.push(newCourse);

    return NextResponse.json({
       courses,
    })


}