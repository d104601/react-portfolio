import React from 'react';

function navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container text-center justify-content-center">
                <a class="navbar-brand" href="/">
                    <h3 class="">Taeyong Lee</h3>
                </a>
                
                <div class="navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-md-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/"><h4>About me</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><h4>Portfolio</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><h4>Contact</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><h4>Resume</h4></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar;