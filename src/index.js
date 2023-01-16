import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.sass';
import App from './App';

/**
 * Ruta de acceso donde esta el body del html
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
