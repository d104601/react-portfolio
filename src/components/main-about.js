import React from 'react';
import Profile from '../img/profile.jpg';

function about() {
    return (
        <div class="container justify-content-center">
            <div class="text-center mh-50">
                <img src={Profile} class="img-fluid" alt="profile pic" />
            </div>
            <h1 class="text-center my-3">About Me</h1>
            <p>
                Aspiring software development professional currently pursuing master’s degree in Computer Science. Worked 3 years in the field of accounting and currently seeking position for career change. Experienced coding with multiple programming languages and frameworks such as Java, Python, JavaScript, and React. Able to work with various people in a team. Possess strong work ethic with a focus on meticulous attention to detail gained from coursework in Software Engineering and Web Technology.
            </p>
        </div>
    )
}

export default about;