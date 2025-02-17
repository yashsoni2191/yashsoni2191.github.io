import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Skill_Edu from '../Pages/Skill_Edu';

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill_edu" element={<Skill_Edu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRouter;
