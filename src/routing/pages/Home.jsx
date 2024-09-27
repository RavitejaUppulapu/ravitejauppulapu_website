import React from "react";
import '../style/Home.css';

const Home = () => {
  const resumeLink = "https://drive.google.com/file/d/1XZgcI_-SdWToVPKC8nOIsF4GXuwdW34e/view?usp=sharing";

  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am <span className="highlight">Raviteja Uppulapu</span>, a passionate <span className="highlight">Full-Stack Developer</span>.</p>
        <p className="intro">I specialize in creating dynamic and responsive web applications using the latest technologies.</p>
        <div className="buttons">
          {/* <a href="#projects" className="cta-button">View My Projects</a> */}
          <a href={resumeLink} className="cta-button resume-button" target="_blank" rel="noopener noreferrer">
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
