// ? This file is optimised for version 1.0

import App from './App';
import React from 'react';
import { render } from 'react-snapshot';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.min.css';
import Mobile from "./comps/Mobile";

render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/app" component={Mobile} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
