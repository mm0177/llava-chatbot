import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import App instead of AppRoutes
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render App instead of AppRoutes */}
  </React.StrictMode>
);
