import React, { useState } from 'react';
import news from '../img/news.jpg';
import cloth from '../img/bcloth.webp';
import editor from '../img/editor.jpg';
import weather from '../img/weather.webp';
import translator from '../img/translate.webp';
import gallery from '../img/gallery.jpg';


function Projects() {
    const [teamProjects, setTeamProjects] = useState([
        {
            name: "Curate",
            image: gallery,
            description: "A sample web application that user can upload their own image that gets put in the museum.",
            tech: "Mongo.db, Express.js, Node.js, Axios, Bootstrap, Apollo, Graphql",
            app: "https://curate-22.herokuapp.com/",
            github: "https://github.com/edgarmendez94/virtual-library",
        },
        {
            name: "News Crawler",
            image: news,
            description: "A sample web application that allows users to view news sources from around the world in an easy manner in developing our application we decided to render current news articles using server-side APIs.",
            tech: "Vanilla JS, Bulma",
            app: "https://mmoreno723.github.io/group-project-1/",
            github: "https://github.com/mmoreno723/group-project-1"
        }
    ]);
    const [singleProjects, setSingleProjects] = useState([
        {
            name: "Personal Blog",
            description: "A sample web Application that user can post text-based article with own account.",
            tech: "React, Tailwind CSS, MongoDB, Express.js, Node.js,",
            app: "https://blog-mern-by-taeyong.herokuapp.com/",
            github: "https://github.com/d104601/blog-mern"
        },
        {
            name: "Text Editor",
            image: editor,
            description: "Text editor that runs in the browser. The application meets the PWA criteria for using in offline",
            tech: "Node.js, Express.js, Webpack",
            app: "https://jate-by-taeyong-lee.herokuapp.com/",
            github: "https://github.com/d104601/text_editor"
        },
        {
            name: "Weather Dashboard",
            image: weather,
            description: "Web Weather Dashboard application that user can search weather information by location",
            tech: "Vanilla JS, Bootstrap, OpenWeather One Call API, Moment.js",
            app: "https://d104601.github.io/Weather_Dashboard/",
            github: "https://github.com/d104601/Weather_Dashboard"
        }
    ]);

    return (
        <div class="container justify-content-center">
            <h1 className="text-center">Projects</h1>
            <h2 className="">Personal Projects</h2>
            {singleProjects.map(project => {
                return (
                    <div className="card mb-3">
                        <div className='row no-gutters'>
                            <div className='col-md-3 text-center'>
                                <img src={project.image} className='card-img flex-column'></img>
                            </div>
                            <div className='col-md-7'>
                                <div className='card-body '>
                                    <h5 className='card-title'>{project.name}</h5>
                                    <p className='card-text'>{project.description}</p>
                                    <p className='card-text'>Tech used: {project.tech}</p>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='card-body text-center'>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <a href={project.app} className="btn btn-dark btn-block">Live Demo</a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href={project.github} className="btn btn-dark btn-block">Repository</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <h2 className="">Team Projects</h2>
            {teamProjects.map(project => {
                return (
                    <div className="card mb-3">
                        <div className='row no-gutters'>
                            <div className='col-md-3 text-center'>
                                <img src={project.image} className='card-img flex-column'></img>
                            </div>
                            <div className='col-md-7'>
                                <div className='card-body '>
                                    <h5 className='card-title'>{project.name}</h5>
                                    <p className='card-text'>{project.description}</p>
                                    <p className='card-text'>Tech used: {project.tech}</p>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='card-body text-center'>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <a href={project.app} className="btn btn-dark btn-block">Live Demo</a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href={project.github} className="btn btn-dark btn-block">Repository</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    );
}

export default Projects;