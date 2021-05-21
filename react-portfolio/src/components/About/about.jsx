import React from "react";
import { Row, Container } from "react-bootstrap";
import "./styles.css"


function About() {
    return (
    <article>
     <h2>About Me</h2>
        <Container>
        <Row>
          <div className="about col-md-10">
            <img className="pic" src="./Images/my-pic" />            
            <h3>BJORN YOUREY - Full Stack Web Developer</h3>
            <p>I'm a recent graduate from University of New Hampshire Bootcamp. I learnt HTML, CSS, Javascript, jQuery, Node.js, MySQL, MongoDB, Express & React.</p>
            <p>I have experience as an SEO Analyst and have built websites for clients and ranked these sites on page 1 of google.</p>
          </div>
        </Row>
        </Container>
    </article>
    
    )
}





export default About;