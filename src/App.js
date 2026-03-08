import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AnimatedRoutes from './components/AnimatedRoutes';
import GAListener from './GAListener';
import analytics from './analytics';

function App() {
  useEffect(() => {
    const id = process.env.REACT_APP_GA_ID;
    if (id) analytics.init(id);
  }, []);
  return (
    <div className='App'>
      <GAListener />
      {/* Dev analytics panel removed */}
      <AnimatedRoutes />
    </div>
  );
}

export default App;
