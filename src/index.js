import { render } from 'react-snapshot';
import './styles/index.min.css';

import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
