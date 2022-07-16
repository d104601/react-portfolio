import React, { useState } from 'react';
import Header from './components/header';
import About from './components/main-about';
import Projects from './components/main-projects';
import Contact from './components/main-contact';
import Footer from './components/footer';

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
      <main class="p-3">
        {page()}
      </main>
      <footer class="">
        <Footer />      
      </footer>
    </div>
  );
}

export default App;

