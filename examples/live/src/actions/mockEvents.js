let store;
let tid;

const userList = [];

function generateId() {
  return Math.floor(Math.random() * 100000000);
}

function createMessage(text) {
  const index = Math.floor(Math.random() * userList.length);
  const user = userList[index];

  if (user) {
    const id = generateId();

    return { 
      id,
      type: 'addMessage',
      user: user.name,
      text,
      time: new Date().toJSON()
    };
  }

  return createUser();
}

function createUser() {
  const id = generateId();
  const user = {
    id,
    type: 'addUser',
    name: `User ${id}`
  };
  userList.push(user);
  return user;
}

function removeUser() {
  const index = Math.floor(Math.random() * userList.length);
  const user = userList[index];
  userList.splice(index, 1);
  return {
    type: 'removeUser',
    id: user && user.id
  };
}

const actions = [
  () => createMessage('Hi my friend'),
  () => createMessage('Howdy!'),
  () => createMessage('Bazinga...'),
  () => createMessage('Example of a text'),
  () => createMessage('Just another weird snippet'),
  () => createUser(),
  () => removeUser()
];

function next() {
  const time = Math.floor(Math.random() * 5000);
  const index = Math.floor(Math.random() * actions.length);
  const action = actions[index];
  tid = setTimeout(() => {
    const payload = action();
    store.dispatch(payload);
    next();
  }, time);
}

export function startEvents(st) {
  store = st;
  next();
}

export function stopEvents() {
  userList.splice(0, userList.length);
  clearTimeout(tid);
}