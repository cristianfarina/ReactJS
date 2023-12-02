import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextFilter } from './data/context/ContextFilter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFilter>
    <App />
  </ContextFilter>
);
