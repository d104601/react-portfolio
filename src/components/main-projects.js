import React from 'react';
import news from '../img/news.jpg';
import cloth from '../img/bcloth.webp';
import editor from '../img/editor.jpg';
import calendar from '../img/calendar.jpg';
import translator from '../img/translate.webp';
import spell from '../img/spell.jpg';


function projects() {
    return (
        <div class="container text-center justify-content-center">
            <h1 class="my-3">Projects</h1>
            <div class="row">
                <div class="col-sm">
                    <div class="card my-2">
                        <img class="card-img-top img-fluid" src={news} alt="Card image cap" />
                        <div class="card-body">
                            <div class="card-title">
                                <h5>News Crawling App</h5>
                            </div>
                            <a href="https://mmoreno723.github.io/group-project-1/" class="card-link btn btn-primary">App Page</a>
                            <a href="https://github.com/mmoreno723/group-project-1" class="card-link btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card my-2">
                        <img class="card-img-top img-fluid" src={cloth} alt="Card image cap" />
                        <div class="card-body">
                            <div class="card-title">
                                <h5>E-Commerce for Baby Cloth</h5>
                            </div> 
                            <a href="https://cub2bear.herokuapp.com/" class="card-link btn btn-primary">App Page</a>
                            <a href="https://github.com/Lunirs/cub2bear" class="card-link btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card my-2">
                        <img class="card-img-top img-fluid" src={editor} alt="Card image cap" />
                        <div class="card-body">
                            <div class="card-title">
                                <h5>Text Editor</h5>
                            </div>
                            <a href="https://jate-by-taeyong-lee.herokuapp.com/" class="card-link btn btn-primary">App Page</a>
                            <a href="https://github.com/d104601/text_editor" class="card-link btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="card my-2">
                        <img class="card-img-top img-fluid" src={calendar} alt="Card image cap" />
                        <div class="card-body">
                            <div class="card-title">
                                <h5>Schedular</h5>
                            </div>
                            <a href="https://d104601.github.io/Work-Day-Scheduler/" class="card-link btn btn-primary">App Page</a>
                            <a href="https://github.com/d104601/Work-Day-Scheduler" class="card-link btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card my-2">
                        <img class="card-img-top img-fluid" src={translator} alt="Card image cap" />
                        <div class="card-body">
                            <div class="card-title">
                                <h5>Screen Translator</h5>
                            </div>
                            <a href="#" class="card-link btn btn-primary">App Page</a>
                            <a href="#" class="card-link btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card my-2">
                        <img class="card-img-top img-fluid" src={spell} alt="Card image cap" />
                        <div class="card-body">
                            <div class="card-title">
                                <h5>Spell Checker</h5>
                            </div>
                            <a href="#" class="card-link btn btn-primary">App Page</a>
                            <a href="#" class="card-link btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default projects;