export default function add(state, action) {
  return {
    items: state.items.concat([{
      id: (Math.random() * 10000000).toFixed(),
      done: false,
      description: action.text
    }])
  };
}
