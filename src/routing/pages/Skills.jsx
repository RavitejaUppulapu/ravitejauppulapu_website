import React from "react";
import '../style/Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3>Programming Languages</h3>
          <p>Python, Java, JavaScript</p>
        </div>
        <div className="skill-item">
          <h3>Web Development</h3>
          <p>HTML, CSS, React.js, Node.js, Express.js, MongoDB, SQL</p>
        </div>
        <div className="skill-item">
          <h3>Version Control & Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
        <div className="skill-item">
          <h3>Frameworks & Libraries</h3>
          <p>EJS, Bootstrap, Mongoose</p>
        </div>
        <div className="skill-item">
          <h3>Concepts</h3>
          <p>Data Structures & Algorithms, Object-Oriented Programming (OOP), Operating Systems, Database Management Systems (DBMS), Computer Networks</p>
        </div>
        <div className="skill-item">
          <h3>Soft Skills</h3>
          <p>Problem-Solving, Collaboration, Communication, Attention to Detail, Adaptability, Time Management, Continuous Learning</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
