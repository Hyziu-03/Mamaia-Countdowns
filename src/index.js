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
// Context
import { AuthProvider } from "context/AuthContext";
import { CountProvider } from "context/CountContext";

ReactDOM.render(
  <AuthProvider>
    <CountProvider>
      <Router>
        <Switch>
          <Route exact path="/set-countdown" component={App} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </CountProvider>
  </AuthProvider>,
  document.getElementById("root")
);

reportWebVitals();
