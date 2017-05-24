import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './todoList';
import Home from './home';
import Hello from './hello';
import NoMatch from './noMatch';
import Menu from './menu';
import './setup';

render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.querySelector('#app')
);
