import * as React from 'react';
import { Router, Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomeComponent from './home';

const history = createBrowserHistory();

// Here we use a simple div as the layout container
// in reality we would always opt for a dedicated
// component.
// Switch will only take the first hit instead of all
// components that apply to the given route.
const app = (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/home" component={HomeComponent} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </div>
  </Router>
);

const exampleLink = (
  <Link to="/home">Go to Homepage</Link>
);
