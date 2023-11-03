import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu = ()=> {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about-website" action>About</Link>
        </ListGroup>
    )
}
export default Menu;