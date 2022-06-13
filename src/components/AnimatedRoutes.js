import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';
import About from '../pages/About/About';
import HomePage from '../pages/home/HomePage';
import Contact from '../pages/contact/Contact';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
