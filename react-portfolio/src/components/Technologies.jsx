import React from "react";
import {
  Card, CardDeck, Container, Col
} from 'react-bootstrap';
// import Images from "../components/Images";

function Technologies() {
  return (
  <div className="background">

   <Container className="tech">
     <CardDeck>
      <Card>
      <Col md={4}>

        
          <Card.Img variant="top" src="C:\Users\byour\OneDrive\Desktop" alt=""/>
      </Col>          
      </Card>
      <Card>
      <Col md={4}>
        <Card.Img variant="top" src="holder.js/100px160" />
      </Col>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        
      </Card>
     </CardDeck>
   </Container>
  </div>
  )
};

export default Technologies;