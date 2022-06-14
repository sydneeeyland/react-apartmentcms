import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/Style/Media.css';
import './Assets/Style/Scrollbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);