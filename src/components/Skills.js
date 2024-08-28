import React from 'react';
import './Skills.css';

const skillsData = [
  {
    skill: "Front End Development",
    subskills: ["HTML", "CSS", "Javascript", "ReactJS"]
  },
  
  {
    skill: ".NET",
    subskills: ["C#", "ASP.NET", "WPF", "Entity Framework"]
  },
  {
    skill: "Database Management",
    subskills: ["SQL Server", "MySQL", "SQLite","RethinkDB"]
  },
  {
    skill: "Git & Version Control",
    subskills: ["Branching", "Merging", "Rebasing"]
  },
  {
    skill: "Python",
    subskills: ["Django"]
  }

];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsData.map((item, index) => (
          <li key={index}>
            <strong>{item.skill}</strong>
            <ul className="subskills">
              {item.subskills.map((subskill, subIndex) => (
                <li key={subIndex}>{subskill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
