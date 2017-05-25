import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

// Connects the application to the Redux store
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

// Connects the React VDOM to the real DOM
render(
  app,
  document.querySelector('#app')
);
