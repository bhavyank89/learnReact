import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode in react, consoles everthing twice
  // <React.StrictMode>
  <App name="Garima" />
  // </React.StrictMode>
);