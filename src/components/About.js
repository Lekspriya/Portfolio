// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2>About Me</h2>
      <p>
      Seeking a role as a Software Developer to utilize my coding skills and passion for problem-solving in innovative projects. Explore my projects to see how I tackle challenges and deliver high-quality software.</p>
    </motion.section>
  );
};

export default About;
