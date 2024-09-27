import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routing/components/Navbar";
import Footer from "./routing/components/Footer";
import Home from "./routing/pages/Home";
import About from "./routing/pages/About";
import Education from "./routing/pages/Education";
import Experience from "./routing/pages/Experience";
import Projects from "./routing/pages/Projects";
import Skills from "./routing/pages/Skills";
import Contact from "./routing/pages/Contact";

import './routing/style/App.css'; // Assuming this is the main stylesheet

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
