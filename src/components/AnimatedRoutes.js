import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';
import About from '../pages/About/About';
import HomePage from '../pages/home/HomePage';
import Contact from '../pages/contact/Contact';
import Skills from '../pages/skills/Skills';
import { AnimatePresence } from 'framer-motion';
import Projects from '../pages/projects/Projects';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
