import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './assets/components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout/>} />
        
      </Routes>
    </div>
  );
}

export default App;
