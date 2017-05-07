import { createStore, Action } from 'redux';

export interface State {
  count: number;
}

// A specialization of the Action, which only applies if add is the type
interface AddAction {
  type: 'add';
  value: number;
}

interface OtherAction {
  type: 'foo';
}

function reducer(state: State, action: AddAction | OtherAction): State {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + action.value
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, {
  count: 0
});
