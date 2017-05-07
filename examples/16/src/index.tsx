import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector('#app'));
