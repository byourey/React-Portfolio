import React from "react";
import { Nav } from "react-bootstrap";
import Style from "./styles/Nav.css";

function Navbar() {
  
  return (

<Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#Portfolio" eventKey="link-1">Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#Technologies" eventKey="link-2">Technologies</Nav.Link>
    </Nav.Item>
      
  </Nav>
  )
}

  export default Navbar;


