import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-GWQ3VQBNLB');

// Send pageview with a custom path

ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

console.log(window.location.pathname);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
