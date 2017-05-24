import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './todoList';
import './setup';

render(
  <Provider store={store}>
  	<TodoList />
  </Provider>,
  document.querySelector('#app')
);
