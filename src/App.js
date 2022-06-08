import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import About from './pages/About/About';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
