import { combineReducers, createStore, Action } from 'redux';

// The interface of the first state
interface FirstState {
  count: number;
}

// The interface of the second state
interface SecondState {
  label: string;
}

// The full state interface
interface State {
  first: FirstState;
  second: SecondState;
}

interface LabelChangeAction extends Action {
  value: string;
}

// The default state
const defaultState = {
  count: 0
};

// A Redux reducer for the first state
function firstReducer(state: FirstState, action: Action): FirstState {
  if (action.type === 'inc') {
    return {
      count: state.count + 1
    };
  }

  return state;
}

// A Redux reducer for the second state
function secondReducer(state: SecondState, action: LabelChangeAction): SecondState {
  if (action.type === 'change') {
    return {
      label: action.value
    };
  }

  return state;
}

const reducer = combineReducers<State>({
  first: firstReducer,
  second: secondReducer
});

// Create a store to be able to listen to changes
const store = createStore(reducer, {
  first: {
    count: 0
  },
  second: {
    label: ''
  }
});
