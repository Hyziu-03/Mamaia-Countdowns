import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from 'react-snapshot';
import './styles/index.min.css';

import React from 'react';
import reportWebVitals from './reportWebVitals';

import App from './App';
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
