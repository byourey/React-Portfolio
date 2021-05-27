import React from "react";
import { Card } from "react-bootstrap";
import ProjectCard from "../ProjectCard/projectCard";
import projects from "../../projects.json";
import "./styles.css";


function Portfolio() {
    return (
        <section>
            <h2>Portfolio</h2>
            
             <Card className="text-center test" style={{ width: '50rem' }}>
              {projects.map(projectCard =>
              <ProjectCard
               key={projectCard.id}
               image={projectCard.image}
               title={projectCard.title}
               description={projectCard.description}
               deployed-url={projectCard["deployed-url"]}
               github-url={projectCard["github-url"]}
               />)}
             
             </Card>
            
        </section>
    )
}

export default Portfolio;