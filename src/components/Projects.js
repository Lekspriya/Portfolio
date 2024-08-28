// src/components/Projects.js
import './Projects.css';
import project1 from '../assets/project1.jfif';
import 'react-image-lightbox/style.css';

const Projects = () => {
   const images = [project1]; // Add more project images as needed

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {images.map((image, index) => (
          <div key={index} className="project" >
            <img src={image} alt={`Project ${index + 1}`} />
            <h3>Portfolio</h3>
            <p> Developed a comprehensive portfolio showcasing my skills and projects as a software developer. It includes detailed descriptions of my work, technologies used, and the impact of each project. </p>
            <a href="#">View Project</a>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Projects;
