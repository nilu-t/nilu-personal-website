import React from 'react';
import '../styles/App.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <section>
        <h1>Nilushanth Thiruchelvam</h1>
        <h2>Software Developer</h2>
        <p>I build robust, scalable, and efficient software solutions.</p>
      </section>

      <nav className="nav-links">
        <div className="nav-item"><Link to="/">ABOUT</Link></div>
        <div className="nav-item"><Link to="/experience">EXPERIENCE</Link></div>
        <div className="nav-item"><Link to="/projects">PROJECTS</Link></div>
      </nav>

    </div>
  );
};

export default Sidebar;
