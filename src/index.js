import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './View/App';
import Login from './View/Login';
import Profile from './View/Profile'
import Projects from './View/Projects'
import RegisterUser from './View/RegisterUser'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css?v1.1.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <App {...props} />}
      />
      <Route
        path="/login"
        exact
        render={props => <Login {...props} />}
      />
      <Route
        path="/profile"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/projects"
        exact
        render={props => <Projects {...props} />}
      />
      <Route
        path="/registerUser"
        exact
        render={props => <RegisterUser {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
