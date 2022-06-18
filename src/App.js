import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div className='App'>
      <AnimatedRoutes />
    </div>
  );
}

export default App;
