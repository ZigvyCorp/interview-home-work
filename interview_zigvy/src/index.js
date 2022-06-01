import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import "../node_modules/react-bootstrap/dist/react-bootstrap"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
