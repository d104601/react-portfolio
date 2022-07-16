import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/Main-about';
import Projects from './components/Main-projects';
import Contact from './components/Main-contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const getAbout = () => {
    setCurrentPage("about");
  }

  const getProjects = () => {
    setCurrentPage("projects");
  }

  const getContact = () => {
    setCurrentPage("contact");
  }

  const page = () => {
    switch(currentPage) {
      case "about":
        return <About />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div className="App-header">
      <header>
        <Header
          getAbout={getAbout}
          getProjects={getProjects}
          getContact={getContact}
        />
      </header>
      <main>
        {page()}
      </main>
      <footer class="bd-footer">
        <Footer />      
      </footer>
    </div>
  );
}

export default App;

