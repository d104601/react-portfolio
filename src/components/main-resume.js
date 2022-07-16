import React from 'react';

function resume() {
    return(
        <div class="container">
            <h1 class="my-3 text-center">Resume</h1>
            <a href="https://drive.google.com/file/d/1AlE7OZAvYF98Fmo1lC_E4oBcsiIGDjDW/view?usp=sharing" class="btn btn-primary btn-lg my-4">Click here to see full resume</a>
            
            <h3>Programming Languages</h3>
            <ul class="my-3 list-group list-group-flush">
                <li class="list-group-item">Java</li>
                <li class="list-group-item">Python</li>
                <li class="list-group-item">Javascript</li>
                <li class="list-group-item">C++</li>
            </ul>

            <h3>Front-End</h3>
            <ul class="my-3 list-group list-group-flush">
                <li class="list-group-item">HTML</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item">Javascript</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Bootstrap</li>
            </ul>

            <h3>Back-End</h3>
            <ul class="my-3 list-group list-group-flush">
                <li class="list-group-item">Express</li>
                <li class="list-group-item">Node.js</li>
                <li class="list-group-item">APIs</li>
            </ul>
        </div>
    );
}

export default resume;