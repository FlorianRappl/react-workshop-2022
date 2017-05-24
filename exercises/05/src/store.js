import { createStore, Action } from 'redux';
import { reducer } from './reducer';

export default createStore(reducer, {
  items: []
});
