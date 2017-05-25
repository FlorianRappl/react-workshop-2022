import { createStore } from 'redux';
import { startEvents, stopEvents } from './actions/mockEvents';
import login from './actions/login';
import send from './actions/send';

let messageId = 1000000;

// The default state to begin with
const defaultState = {
  authorized: false,
  userName: undefined,
  progress: false,
  error: undefined,
  conversation: {
    users: [],
    messages: []
  }
};

// The reducer with (in this case) handlers for
// all potential action types
function reducer(state, action) {
  switch (action.type) {
    case 'sendMessage':
      send(action.text)
        .then(() => store.dispatch({
          type: 'sentMessage',
          text: action.text
        }))

      return Object.assign({}, state, {
        progress: true
      });
    case 'sentMessage':
      return Object.assign({}, state, {
        progress: false,
        conversation: Object.assign({}, state.conversation, {
          messages: state.conversation.messages.concat([{
            id: messageId++,
            text: action.text,
            from: state.userName,
            read: true,
            time: new Date().toJSON()
          }])
        })
      });
    case 'addMessage':
      return Object.assign({}, state, {
        conversation: Object.assign({}, state.conversation, {
          messages: state.conversation.messages.concat([{
            id: action.id,
            text: action.text,
            from: action.user,
            read: action.read || false,
            time: action.time
          }])
        })
      });
    case 'addUser':
      return Object.assign({}, state, {
        conversation: Object.assign({}, state.conversation, {
          users: state.conversation.users.concat([{
            id: action.id,
            name: action.name
          }])
        })
      });
    case 'removeUser':
      return Object.assign({}, state, {
        conversation: Object.assign({}, state.conversation, {
          users: state.conversation.users.filter((user) => user.id !== action.id)
        })
      });
    case 'clearError':
      return Object.assign({}, state, {
        error: undefined
      });
    case 'loginSuccess':
      // Just for testing purposes
      // start sending mock events
      startEvents(store);

      return Object.assign({}, state, {
        authorized: true,
        progress: false,
        conversation: {
          users: [{
            id: -1,
            name: state.userName
          }],
          messages: []
        }
      });
    case 'loginFailed':
      return Object.assign({}, state, {
        error: 'Login failed!',
        progress: false
      });
    case 'login':
      if (!action.userName) {
        return Object.assign({}, state, {
          error: 'Please enter a valid user name!'
        });
      }

      login(action.userName)
        .then(() => store.dispatch({
          type: 'loginSuccess'
        }))
        .catch(() => store.dispatch({
          type: 'loginFailed'
        }));

      return Object.assign({}, state, {
        progress: true,
        userName: action.userName
      });
    case 'logout':
      // Just for testing purposes
      // some sending mock events
      stopEvents();

      return Object.assign({}, state, {
        authorized: false
      });
    default:
      // if nothing was matched, just return
      // the given state (unchanged)
      return state;
  }
}

// Create the store singleton
const store = createStore(reducer, defaultState);

export default store;
