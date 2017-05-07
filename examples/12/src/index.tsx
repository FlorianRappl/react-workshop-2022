import * as React from 'react';
import { Router, Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomeComponent from './home';

const history = createBrowserHistory();

const app = (
  <Router history={history}>
    <Redirect from="/" to="/home" />
    <Route path="/home" component={HomeComponent} />
  </Router>
);

const exampleLink = (
  <Link to="/home">Go to Homepage</Link>
);
