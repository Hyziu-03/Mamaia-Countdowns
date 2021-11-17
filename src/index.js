import App from './App';
import React from 'react';
import { render } from 'react-snapshot';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.min.css';
import Mobile from "./comps/Mobile";
import Home from './comps/Home';

render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/set-countdown" component={Mobile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
