import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import HomePage from './pages/home/HomePage';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
