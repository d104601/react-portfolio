import React from 'react';
import { skills } from "../data/skills";

function Resume() {
     return (
        <section id="skills">
            <div class="container" >
                <h1 class="my-3 text-center">Skills</h1>

                <a href={skills.resumeURL} className="btn btn-dark btn-lg my-4">Click here to see full resume</a>

                <h3>Programming Languages</h3>
                <ul class="my-3 list-group list-group-flush">
                    {skills.languages.map(lang => {
                        return (
                            <li class="list-group-item">{lang}</li>
                        )
                    })}
                </ul>

                <h3>Technologies</h3>
                <ul class="my-3 list-group list-group-flush">
                    {skills.technologies.map(tech => {
                        return (
                            <li class="list-group-item">{tech}</li>
                        )
                    })}
                </ul>

                <h3>Others</h3>
                <ul class="my-3 list-group list-group-flush">
                    {skills.others.map(list => {
                        return (
                            <li class="list-group-item">{list}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Resume;