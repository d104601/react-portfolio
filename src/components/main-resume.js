import React, {useState} from 'react';

function Resume() {
    const [languages] = useState([
        "HTML", "CSS", "Java", "JavaScript", "Kotlin", "Python", "SQL", "NoSQL"
    ]);
    const [technologies] = useState([
        "Git", "Node.js", "React.js", "Heroku", "MySQL", "PostgreSQL", "MongoDB", "Bootstrap", "Tailwind CSS", "GraphQL"
    ]);
    const [others] = useState([
        "Agile", "Algorithm analysis", "Responsive Design"
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

            <h3>Technologies</h3>
            <ul class="my-3 list-group list-group-flush">
                {technologies.map(tech => {
                    return (
                        <li class="list-group-item">{tech}</li>
                    )
                })}
            </ul>

            <h3>Back-End</h3>
            <ul class="my-3 list-group list-group-flush">
                {others.map(list => {
                    return (
                        <li class="list-group-item">{list}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Resume;