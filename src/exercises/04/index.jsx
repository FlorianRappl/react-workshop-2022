import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import HelloPage from './Hello';
import TodoListPage from './TodoList';

const NotFound = () => <div>The requested page was not found.</div>;

const Menu = () => (
  <ul>
    <li>
      <NavLink to="/hello">Hello!</NavLink>
    </li>
    <li>
      <NavLink to="/todo">Todo List</NavLink>
    </li>
  </ul>
);

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Redirect exact from="/" to="/hello" />
      <Route path="/hello" component={HelloPage} />
      <Route path="/todo" component={TodoListPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
