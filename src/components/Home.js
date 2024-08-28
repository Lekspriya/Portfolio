// src/components/Home.js

import React from 'react';
import './Home.css';
import developerImage from '../assets/profile.jpg'; // Ensure this path matches the image you're using

const Home = () => {
  return (
    <div className="home">
          <div className="home-content">
        <div className="text-content">
          <h3>Hi, I'm Athira AJ</h3>
          <h1>I'm a Software Developer</h1>
          <p>
          I’m a software developer with expertise in C#, Python, and JavaScript, focused on creating efficient, high-quality solutions and collaborating effectively with teams. </p>
          <button className="view-projects-button" ><a href="#projects">VIEW MY PROJECTS</a></button>
        </div>
        <div className="image-container">
          <img src={developerImage} alt="Developer" className="developer-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
