import React from 'react';

function navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container text-center justify-content-center">
                <a class="navbar-brand" href="#" onClick={props.getHome}>
                    <h3 class="">Taeyong Lee</h3>
                </a>
                
                <div class="navbar-collapse" >
                    <ul class="navbar-nav ms-md-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about" onClick={props.getAbout}><h4>About</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects" ><h4>Projects</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact" onClick={props.getContact}><h4>Contact</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resume"><h4>Resume</h4></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar;