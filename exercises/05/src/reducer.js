const handlers = {};

export function reducer(state, action) {
  const handler = handlers[action.type];
  const result = handler ? handler(state, action) : state;
  console.log(result);
  return result;
}

export function register(name, handler) {
  handlers[name] = handler;
}
