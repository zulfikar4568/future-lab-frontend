import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ui/App';
import './ui/assets/stylesheets/index.scss';
import 'rsuite/dist/rsuite.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);