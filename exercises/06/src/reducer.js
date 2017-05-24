export class Reducer {
  constructor(defaultState) {
    this.handlers = {};
    this.defaultState = defaultState;
  }

  reduce(state, action) {
    if (state === undefined) {
      state = this.defaultState;
    }

    const handler = this.handlers[action.type];
    const result = handler ? handler(state, action) : state;
    console.log(result);
    return result;
  }
  
  register(name, handler) {
    this.handlers[name] = handler;
    return this;
  } 
}

export const todoReducer = new Reducer({ items: [] });
export const helloReducer = new Reducer({ count: 0 });
export const homeReducer = new Reducer({ });
