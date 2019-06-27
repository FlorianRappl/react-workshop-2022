import * as React from 'react';
import { render } from 'react-dom';
import { Router, Redirect, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';

const history = createHashHistory();

const HomeComponent = () => (
  <Link to="/">Go to Homepage</Link>
);

const App = () => (
  <Router history={history}>
    <Redirect from="/" to="/home" />
    <Route path="/home" component={HomeComponent} />
  </Router>
);

render(<App />, document.querySelector('#app'));
