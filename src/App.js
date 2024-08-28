// src/App.js
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
