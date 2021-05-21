import React from "react";
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faEnvelope } from "@fortawesome/free-brands-svg-icons";


function Contact() {
    return (
       <section>
       <h2>Contact</h2>
        <div className="containerr">
           <div className="row">
             <div className="boxes col-12">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item"><a href="https://www.linkedin.com/in/byourey83/" title="LinkedIn" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a></li>
                  <li className="list-group-item"><a href="https://github.com/byourey" title="GitHub" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="4x" /></a></li>
                  <li className="list-group-item"><a href="byourey7783@gmail.com" title="Email" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="4x" /></a></li>
                </ul>
              </div>
            </div>
        </div>
       </section>
    )
}

export default Contact;