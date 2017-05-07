import { store } from './store';

export function addToCount(value: number) {
  store.dispatch({ 
    type: 'add',
    value
  });
}

export function incrementCount() {
  store.dispatch({ 
    type: 'add',
    value: 1
  });
}
