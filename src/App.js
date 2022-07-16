import React, { useState } from 'react';
import Header from './components/header';
import Home from './components/main-home';
import About from './components/main-about';
import Projects from './components/main-projects';
import Contact from './components/main-contact';
import Footer from './components/footer';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const getHome = () => {
    setCurrentPage("home");
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

  const page = () => {
    switch(currentPage) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
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

