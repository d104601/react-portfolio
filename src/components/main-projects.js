import React, { useState } from 'react';
import { personal, team } from '../data/projects';

function Projects() {
    return (
        <section id="projects" className='jumbotron bg-light'>
            <div class="container justify-content-center">
                <h1 className="text-center mh-4">Projects</h1>
                <h2 className="">Personal Projects</h2>
                {personal.map(project => {
                    return (
                        <div className="card mb-3">
                            <div className='row no-gutters'>
                                <div className='col-md-10'>
                                    <div className='card-body '>
                                        <h5 className='card-title'>{project.name}</h5>
                                        <p className='card-text'>{project.description}</p>
                                        <p className='card-text'>Tech used: {project.tech}</p>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='card-body text-center'>
                                        <ul class="list-group list-group-flush">
                                            {
                                                project.app
                                                    ?
                                                    <li class="list-group-item">
                                                        <a href={project.app} className="btn btn-dark btn-block">Live Demo</a>
                                                    </li>
                                                    :
                                                    <></>
                                            }
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
                {team.map(project => {
                    return (
                        <div className="card mb-3">
                            <div className='row no-gutters'>
                                <div className='col-md-10'>
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
        </section>
    );
}

export default Projects;