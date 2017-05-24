import * as React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import createHashHistory from 'history/createHashHistory';

// Edit below to solve the assignment

import Hello from '../../02/src/component';
import TodoList from '../../03/src/todoList';

const Home = (props) => (
  <div>
    <h1>
      Home
    </h1>
  </div>
);

const NoMatch = (props) => (
  <div>
    <span style={{ color: 'red' }}>
      The link is invalid ...
    </span>
  </div>
);

const Menu = (props) => (
  <ul>
    <li>
      <Link to="/home">
        Home
      </Link>
    </li>
    <li>
      <Link to="/hello">
        Hello Component
      </Link>
    </li>
    <li>
      <Link to="/todo">
        Todo List
      </Link>
    </li>
    <li>
      <Link to="/foo">
        Invalid link
      </Link>
    </li>
  </ul>
);

render(
  <Router history={createHashHistory()}>
    <div>
      <Menu />
      <Switch>
        <Route path="/home"
               component={Home} />
        <Route path="/hello"
               component={Hello} />
        <Route path="/todo"
               component={TodoList} />
        <Redirect from="/"
                  to="/home"
                  exact />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>,
  document.querySelector('#app')
);
