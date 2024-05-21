import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';

const MainContent = () => {
  return (
    <div id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default MainContent;
