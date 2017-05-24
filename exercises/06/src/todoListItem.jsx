import * as React from 'react';
import { toggle, editItem } from './actions';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    const item = props.item;
    this.state = {
      id: item.id,
      description: item.description,
      done: item.done
    };
  }

  componentWillReceiveProps(nextProps) {
    const item = nextProps.item;
    this.setState({
      description: item.description,
      done: item.done
    });
  }

  render() {
    return (
      <div>
        <input type="checkbox"
               checked={this.state.done}
               onChange={(ev) => toggle(this.state.id)} />
        { 
          (this.state.done) ? (
            <span style={{ textDecoration: 'line-through' }}>
              { this.state.description }
            </span>
          ) : (
            <input type="text"
                   value={this.state.description}
                   onChange={(ev) => editItem(this.state.id, ev.target.value)} />
          )
        }
      </div>
    );
  }
}
