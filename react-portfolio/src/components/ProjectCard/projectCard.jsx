import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

function ProjectCard(props) {
    return (
        <main>
            <Card className="text-center" style={{ width: '50rem' }}>
                <Card.Img variant="top" alt="img" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                </Card.Body>              
                <Card.Body>
                    <a className="btn" href={props["github-url"]} target="_blank" title="GitHub" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
                    <a className="btn" href={props["deployed-url"]} target="_blank" title="GitHub" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </Card.Body>
            </Card>
            
        </main>
    )
}

export default ProjectCard;