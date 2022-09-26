import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/main-about';
import Projects from './components/main-projects';
import Contact from './components/main-contact';
import Skills from './components/main-skills';
import Footer from './components/footer';
import "./style/style.css";


function App() {
  return (
    <div className="">
      <header>
        <Navbar/>
      </header>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Skills />
      </main>
      <footer>
        <Footer />      
      </footer>
    </div>
  );
}

export default App;

