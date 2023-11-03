import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import { Jumbotron } from 'reactstrap';


const Home = () => {

  useEffect(()=>{
    document.title = "Home || learn code with pranav"
  },[]);
  
    return (
        <div className="container-fluid bg-light text-dark p-5">
        <div className="container bg-light text-center p-5">
          <h1 className="display-4 fw-bold">Welcome to Home Dashboard</h1>
          <hr></hr>
            <p>Go to My Website</p>
            {/* <a href="#" class="btn btn-primary">link</a> */}
            <Container>
                <button className= "primary">start using</button>
                </Container>            
        </div>
      </div>
    );
};

export default Home;
