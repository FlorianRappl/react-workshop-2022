import * as React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';
import TodoListItem from './todoListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  }

  render() {
    return (
      <div>
        {
          this.state.items.map((item) => (
            <TodoListItem key={item.id}
                          item={item} />
          ))
        }
        <div>
          <button onClick={() => addItem('New item')}>add item</button>
        </div>
      </div>
    );
  }
};

export default connect((state) => ({ items: state.todo.items }))(TodoList);
