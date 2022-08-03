import React from 'react';

function navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container text-center justify-content-center">
                <a className="navbar-brand" href="/">
                    <h3 className="">Taeyong Lee</h3>
                </a>
                
                <div className="navbar-collapse" >
                    <ul className="navbar-nav ms-md-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={props.getAbout}><h4>About</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={props.getProjects}><h4>Projects</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={props.getContact}><h4>Contact</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume" onClick={props.getResume}><h4>Resume</h4></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar;