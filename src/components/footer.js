import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
    return (
        <div className="container text-center pb-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
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
            <p>© Taeyong Lee 2022. All Right Reserved</p>
        </div>
    );
}

export default footer;