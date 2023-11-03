import axios from "axios";
import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from "reactstrap";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";
import Addcourse from "./Addcourse";
 
  const Course=({course,update})=>  {
   
    const deleateCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("deleated sucessfully")
                update(id)
            },
            (error)=>{
                toast.error("course not deleated !! server problem")
            }
        )
    }
    const updateCourse=(course)=>{
        // <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
    }
        return (
            <Card>
                <CardBody>
                    <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
                    {/* <CardTitle>{course.discription}</CardTitle> */}
                    <CardText>{course.discription}</CardText>
                    <Container>
                        <Button color="primary" onClick={()=>{
                            updateCourse(course);
                        }}>Update</Button>

                        <Button color="warning ml-3" onClick={()=>{
                            deleateCourse(course.id)
                        }}>Delete</Button>
                    </Container>
                </CardBody>
            </Card>      
    )
    
  }

  export default Course;

