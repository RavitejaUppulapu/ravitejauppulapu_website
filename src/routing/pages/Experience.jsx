import React from "react";
import '../style/Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Web Developer Intern</h3>
          <h4>Pullulate Pvt Ltd</h4>
          <p className="duration">(May 2023 - Dec 2023)</p>
          <p className="description">
            Developed and maintained the company's website, focusing on enhancing user experience and implementing responsive designs. Collaborated with the design team to integrate user feedback for improvements.
          </p>
        </div>
        <div className="experience-item">
          <h3>Python Developer Intern</h3>
          <h4>CodeClause</h4>
          <p className="duration">(July 2023 - Aug 2023)</p>
          <p className="description">
            Contributed to Python-based projects, optimizing existing code and developing new features. Gained experience in data manipulation and web scraping techniques.
          </p>
        </div>
        {/* You can add more experience items here */}
      </div>
    </section>
  );
};

export default Experience;
