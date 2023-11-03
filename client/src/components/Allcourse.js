import React, { useEffect, useState } from "react";
import Course from "./course";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

const Allcourse=() => {

    useEffect(() => {
        document.title = "View course";
    }, []);

    //updateCourse course
    const updateCourse=(id)=>{
        setCourse(course.filter((c)=>c.id!=id));
    }


    const getAllCourseFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                setCourse(response.data);
                toast.success("course has been loaded")
            },
           (error) =>{
            console.log(error);
            toast.error("something went wrong")
           }
        )
    };

    useEffect(() => {
        getAllCourseFromServer()
    }, []);

    const[course,setCourse] = useState([
        // {id:"123",title:"java",description:"this is for beginer"},
        // {id:"122",title:"python", description:"this is for beginer pyton"},
        // {id:"124",title:"English",description:"this is for not a beginer"}
    ]);

    return(
        <div>
            
            <h1>All course</h1>
            <p>why you should learn from here</p>

            {course.length>0? course.map((item,index,arr) =>{
                return <Course key={item.id} course={item} update={updateCourse}></Course>;
            }):"not found"}

        </div>
    )
}
export default Allcourse;