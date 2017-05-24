import store from './store';

export function addItem(text) {
  store.dispatch({ 
    type: 'add',
    text
  });
}

export function toggle(id) {
  store.dispatch({ 
    type: 'toggle',
    id
  });
  
}

export function editItem(id, text) {
  store.dispatch({ 
    type: 'edit',
    id,
    text
  });
}
