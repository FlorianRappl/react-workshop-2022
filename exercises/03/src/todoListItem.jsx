import * as React from 'react';

// Changes required below this line

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      done: props.done
    };
  }

  toggle(done) {
    this.setState({
      done
    });

    this.props.onChange({
      description: this.state.description,
      done
    });
  }

  edit(description) {
    this.setState({
      description
    });

    this.props.onChange({
      description,
      done: this.state.done
    });
  }

  render() {
    return (
      <div>
        <input type="checkbox"
               checked={this.state.done}
               onChange={(ev) => this.toggle(ev.target.checked)} />
        { 
          (this.state.done) ? (
            <span style={{ textDecoration: 'line-through' }}>
              { this.state.description }
            </span>
          ) : (
            <input type="text"
                   value={this.state.description}
                   onChange={(ev) => this.edit(ev.target.value)} />
          )
        }
      </div>
    );
  }
}
