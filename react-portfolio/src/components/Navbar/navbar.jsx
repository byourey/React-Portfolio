import React from "react";
import { Nav } from "react-bootstrap";
import "./styles.css";

function Navbar() {
  
  return (


     <Nav className="navbar navbar-expand-lg">
         <div className="container-fluid">
              <h1>BJORN YOUREY</h1>

                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className="navlinks" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navlinks" href="#Portfolio" eventKey="link-1">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navlinks" href="#Contact" eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
         </div>

     </Nav>
          
    
  )
}

  export default Navbar;


