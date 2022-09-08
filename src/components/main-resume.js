import React, {useState} from 'react';

function Resume() {
    const [languages] = useState([
        "Java", "Python", "Javascript", "Kotlin"
    ]);
    const [frontEnd] = useState([
        "HTML", "CSS", "Bootstrap", "Tailwind CSS", "React"
    ]);
    const [backEnd] = useState([
        "Node.js", "Express", "MySQL", "MongoDB"
    ]);

    return(
        <div class="container">
            <h1 class="my-3 text-center">Resume</h1>
            <a href="https://drive.google.com/file/d/1AlE7OZAvYF98Fmo1lC_E4oBcsiIGDjDW/view?usp=sharing" className="btn btn-dark btn-lg my-4">Click here to see full resume</a>
            
            <h3>Programming Languages</h3>
            <ul class="my-3 list-group list-group-flush">
                {languages.map(lang => {
                    return (
                        <li class="list-group-item">{lang}</li>
                    )
                })}
            </ul>

            <h3>Front-End</h3>
            <ul class="my-3 list-group list-group-flush">
                {frontEnd.map(front => {
                    return (
                        <li class="list-group-item">{front}</li>
                    )
                })}
            </ul>

            <h3>Back-End</h3>
            <ul class="my-3 list-group list-group-flush">
                {backEnd.map(back => {
                    return (
                        <li class="list-group-item">{back}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Resume;