import React, { useState } from "react"
import { Button, Container, Form,FormGroup,Fragment, Input, Label } from "reactstrap"
import { useEffect } from "react"
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";


  const Addcourse=()=> {


        useEffect(()=>{
            document.title = "Add Course||learn code with pranav"
        },[]);

        //form handle 
        const [course,setCourse] = useState({});
        const handleForm=(e)=>{
            console.log(course)
            //caling to post data
            postDataToServer(course)
            e.preventDefault();
        }


        //post data to server
        const postDataToServer=(data)=>{
            axios.post(`${base_url}/courses`,data).then(
                (response)=>{
                    console.log(response)
                    toast.success("Course added")
                },
                (error)=>{
                    console.log(error)
                    toast.error("something went wrong")
                }
            )
        }
        return (
             <Form onSubmit={handleForm}>

                 <FormGroup >
                     <Label for="userId">Course Id</Label>
                     <Input type="text" placeholder="Enter here" name="userId" id="userId" 
                     onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                     }}/>
                 </FormGroup>

                 <FormGroup>
                     <Label for="title">Course title</Label>
                     <Input type="text" placeholder="Enter here" name="title" id="title" 
                     onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                     }}/>
                 </FormGroup>

                 <FormGroup>
                     <Label for="Description">Course Description</Label>
                     <Input type="text" placeholder="Enter Description here" name="discription" id="discription" 
                    onChange={(e)=>{
                        setCourse({...course,discription:e.target.value})
                    }}/>
                 </FormGroup>

                 <Container className="text-center ">
                    <Button type="submit" color="success">Add</Button>
                    <Button type="reset" color="warning ml-3" >Clear</Button>
                 </Container>

             </Form>
        )
}
export default Addcourse;
