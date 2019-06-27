import * as React from 'react';

const TodoItem = ({ done, text, onChange }) => {
  return (
    <div>
      <input type="checkbox" value={done} onChange={e => onChange && onChange(e.target.checked)} />
      <label>{done ? <s>{text}</s> : <b>{text}</b>}</label>
    </div>
  );
};

const AddTodoItem = ({ onAdd }) => {
  const [text, setText] = React.useState('');
  const add = e => {
    e.preventDefault();
    onAdd && onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={add}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

const TodoList = () => {
  const [items, setItems] = React.useState([]);
  const changeItem = (item, done) => setItems(items.map(m => (m === item ? { ...item, done } : m)));
  return (
    <div>
      {items.map(item => (
        <TodoItem {...item} key={item.id} onChange={done => changeItem(item, done)} />
      ))}
      <AddTodoItem
        onAdd={text =>
          setItems([
            ...items,
            {
              id: items.length,
              text,
              done: false,
            },
          ])
        }
      />
      <button onClick={() => setItems([])}>Reset</button>
    </div>
  );
};

export default () => (
  <TodoList />
);
