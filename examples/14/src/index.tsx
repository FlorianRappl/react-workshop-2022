import { createStore, Action } from 'redux';

// The state interface
interface State {
  count: number;
}

// The default state
const defaultState = {
  count: 0
};

// One sample action - taking the state and returning a new state
function myAction(state: State): State {
  return {
    count: state.count + 5
  };
}

// A Redux reducer
function reducer(state: State, action: Action): State {
  // only convention
  switch (action.type) {
    // return new state
    case 'my-action':
      return myAction(state);
    default:
       // same state, no change
      return state;
  }
}

// Create a store to be able to listen to changes
const store = createStore(reducer, defaultState);

// Listen to changes
store.subscribe(() => console.log(store.getState()));

// Dispatch an action
store.dispatch({ type: 'my-action' });
