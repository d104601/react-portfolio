import React from 'react';
import { aboutMe } from '../data/about.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function about() {
    return (
        <section className='jumbotron' id="about">
            <div class="container justify-content-center">
                <div class="text-center mh-50">
                    <img src={aboutMe.profile} class="rounded-circle" alt="profile pic" />
                </div>
                <h1 class="text-center my-3">{aboutMe.title}</h1>
                <p>{aboutMe.content}</p>
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item">
                        <a className="nav-link px-2 fs-2 text-black" href="https://github.com/d104601">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2 fs-2 text-black" href="https://www.linkedin.com/in/taeyonglee920716/">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default about;