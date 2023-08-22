import { NextResponse } from "next/server";
import courses from '../data.json';

export async function GET(request){
    const { searchParams } = new URL(request.url);
    const  q  = searchParams.get('q');
    const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(q.toLowerCase()));
    return NextResponse.json(filteredCourses)
}

