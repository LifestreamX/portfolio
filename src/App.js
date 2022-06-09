import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import AnimatedRoutes from './components/AnimatedRoutes';
import Layout from './Layout/Layout';
import About from './pages/About/About';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className='App'>
      <AnimatedRoutes />
    </div>
  );
}

export default App;
