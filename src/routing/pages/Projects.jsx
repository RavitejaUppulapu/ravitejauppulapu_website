import React from "react";
import '../style/Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>TechFarmers</h3>
          <p>An agri-tech education platform to help farmers modernize their methods.</p>
        </div>
        <div className="project-item">
          <h3>Petty Cash Management System</h3>
          <p>A tool to manage and track small expenses.</p>
        </div>
        {/* Add more project items here */}
      </div>
    </section>
  );
};

export default Projects;
