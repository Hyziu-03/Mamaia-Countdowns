// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "styles/styles.css";
// Web Vitals
import reportWebVitals from "reportWebVitals";
// Components
import App from "components/App.jsx";
import Home from "components/Home.jsx";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/set-countdown" component={App} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
