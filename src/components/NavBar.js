import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" aria-label="Home">Home</a>
      <a href="#about" aria-label="About">About</a>
      <a href="#skills" aria-label="Skills">Skills</a>
      <a href="#projects" aria-label="Projects">Projects</a>
      <a href="#experience" aria-label="Experience">Experience</a>
      <a href="#education" aria-label="Education">Education</a>
      <a href="#contact" aria-label="Contact">Contact</a>
    </nav>
  );
};

export default NavBar;
