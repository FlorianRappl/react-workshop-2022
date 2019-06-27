import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import ContextProvider from './ContextProvider';

const HelloPage = React.lazy(() => import('./Hello'));
const TodoListPage = React.lazy(() => import('./TodoList'));

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
  <ContextProvider>
    <BrowserRouter>
      <Menu />
      <React.Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Redirect exact from="/" to="/hello" />
          <Route path="/hello" component={HelloPage} />
          <Route path="/todo" component={TodoListPage} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </ContextProvider>
);

render(<App />, document.querySelector('#app'));
