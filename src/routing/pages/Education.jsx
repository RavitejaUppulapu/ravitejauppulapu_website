import React from "react";
import '../style/Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p>IARE, 2021-2025</p>
          <p className="description">
            Focused on software development, data structures, algorithms, and web technologies. Actively participated in various coding competitions and tech seminars.
          </p>
        </div>
        {/* You can add more education items here */}
        <div className="education-item">
          <h3>Intermediate Education</h3>
          <p>Pratibha Junior college, 2019-2021</p>
          <p className="description">
            Specialized in Mathematics, Physics, and Computer Science. Developed a strong foundation in analytical and problem-solving skills.
          </p>
        </div>
        <div className="education-item">
          <h3>Matriculation</h3>
          <p>Mayurin Vidyalayam, -2019</p>
          <p className="description">
            I performed well academically and was actively involved in various extracurricular activities. I participated in district-level Kabaddi competitions, practiced NCC (National Cadet Corps), and took part in Karate, dance, and singing events. These experiences helped me develop discipline, teamwork, and leadership skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
