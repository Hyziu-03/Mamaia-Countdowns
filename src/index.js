import React from 'react';
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import App from './comps/App.jsx';
import Home from './comps/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/set-countdown' component={App} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
