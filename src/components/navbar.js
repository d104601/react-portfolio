import React, { useState, useEffect } from 'react';

function Navbar(props) {
    const [top, setTop] = useState(true);
    const [scroll, setScroll] = useState(0);
    
    useEffect(() => {
        if(scroll === 0) {
            setTop(true);
        } else {
            setTop(false);
        }
    }, [scroll]);
    
    return (
        <nav className={`px-3 navbar navbar-expand-lg ${top ? "navbar-transparent navbar-light" : "sticky-top navbar-dark bg-dark"} fixed-top`}>
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <h3 className="">Taeyong Lee</h3>
                </a>
                <button className="toggler navbar-toggler collapsed" aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="basic-navbar-nav" className="navbar-collapse collapse" >
                    <div className="navbar-nav ms-md-auto">
                        <a className="nav-link" href="#about"><h4>About</h4></a>
                        <a className="nav-link" href="#projects"><h4>Projects</h4></a>
                        <a className="nav-link" href="#contact"><h4>Contact</h4></a>
                        <a className="nav-link" href="#skills"><h4>Skills</h4></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;