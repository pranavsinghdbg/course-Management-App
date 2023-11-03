import React from "react";

const About = () => {
  return (
    <div className="container-fluid bg-light text-dark p-5">
      <div className="container bg-light p-5">
        <h1 className="display-4 text-center fw-bold">This is Admin Panel</h1>
        <hr></hr>
        <h3>You can do following operation</h3>
        <ul>
          <li>Read</li>
          <li>Update</li>
          <li>Add</li>
          <li>Delate</li>
        </ul>
      </div>
    </div>
  );
};
export default About;
