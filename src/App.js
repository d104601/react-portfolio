import React, { useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/main-about';
import Projects from './components/main-projects';
import Contact from './components/main-contact';
import Resume from './components/main-resume';
import Footer from './components/footer';
import "./style/style.css";


function App() {
  const [currentPage, setCurrentPage] = useState("");

  const getHome = () => {
    setCurrentPage("/");
  }

  const getAbout = () => {
    setCurrentPage("about");
  }

  const getProjects = () => {
    setCurrentPage("projects");
  }

  const getContact = () => {
    setCurrentPage("contact");
  }

  const getResume = () => {
    setCurrentPage("resume");
  }

  const page = () => {
    switch(currentPage) {
      case "about":
        return <About />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />
      default:
        return <Home />
    }
  }

  return (
    <div className="App-header">
      <header>
        <Header
          getHome={getHome}
          getAbout={getAbout}
          getProjects={getProjects}
          getContact={getContact}
          getResume={getResume}
        />
      </header>
      <main className="p-3">
        {page()}
      </main>
      <footer>
        <Footer />      
      </footer>
    </div>
  );
}

export default App;

