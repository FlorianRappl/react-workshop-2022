export default function add(state, action) {
  return {
    items: state.items.map((item) => {
      if (item.id === action.id) {
        return Object.assign({}, item, {
          description: action.text
        });
      }

      return item;
    })
  };
}
