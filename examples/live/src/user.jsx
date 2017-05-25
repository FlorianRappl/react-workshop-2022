import * as React from 'react';

// simple user view
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      self: props.self
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
      self: nextProps.self
    });
  }

  render() {
    return (
      <div>
        {
          (this.state.self) ? (
            <strong>
              { this.state.name }
            </strong>
          ) : (
            this.state.name
          )
        }
      </div>
    );
  }
}
