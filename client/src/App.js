import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import Allcourse from "./components/Allcourse";
import Addcourse from "./components/Addcourse";
import About from "./components/About";
import Menu from "./components/Menu";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";

function App() {
  const buttonhandle = () => {
    toast.success("done");
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>

            <Col md={4}>
              <Menu></Menu>
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-course" Component={Addcourse} exact />
                <Route path="/view-course" Component={Allcourse} exact />
                <Route path="/about-website" Component={About} exact />
                <Route path="/contact" Component={Contact} exact></Route>
              </Routes>
            </Col>
            
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
