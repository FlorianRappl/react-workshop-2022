import * as React from 'react';
import TodoListItem from './todoListItem';

// Changes required below this line

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  append() {
    const items = this.state.items;

    items.push({
      id: (Math.random() * 10000000).toFixed(),
      done: false,
      description: 'New TODO item'
    })

    this.setState({
      items
    })
  }

  update(item, data) {
    item.done = data.done;
    item.description = data.description;
  }

  render() {
    return (
      <div>
        {
          this.state.items.map((item) => (
            <TodoListItem key={item.id}
                          done={item.done}
                          description={item.description}
                          onChange={(data) => this.update(item, data)} />
          ))
        }
        <div>
          <button onClick={() => this.append()}>add item</button>
        </div>
      </div>
    );
  }
};
