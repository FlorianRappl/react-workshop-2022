export default function toggle(state, action) {
  return {
    items: state.items.map((item) => {
      if (item.id === action.id) {
        return Object.assign({}, item, {
          done: !item.done
        });
      }

      return item;
    })
  };
}
