import { createStore, combineReducers } from 'redux';
import { homeReducer, todoReducer, helloReducer } from './reducer';

const reducer = combineReducers({
  home: (s, a) => homeReducer.reduce(s, a),
  todo: (s, a) => todoReducer.reduce(s, a),
  hello: (s, a) => helloReducer.reduce(s, a)
});

export default createStore(reducer);
