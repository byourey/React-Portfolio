import React from "react";
import { Card, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "../ProjectCard/projectCard";
import projects from "../../projects.json";


function Portfolio() {
    return (
        <section>
            <h2>Portfolio</h2>
            
             <Card className="text-center" style={{ width: '50rem' }}>
             <Row className="d-flex flex-column align-items-center">
              {projects.map(project =>
              <ProjectCard
               key={ProjectCard.id}
               image={ProjectCard.image}
               title={ProjectCard.title}
               text={ProjectCard.text}
               deployed-url={ProjectCard["deployed-url"]}
               github-url={ProjectCard["github-url"]}
               />)}

             </Row> 
             </Card>
            
        </section>
    )
}

export default Portfolio;