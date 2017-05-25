import * as React from 'react';

// Simple component to display a message
export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
      user: props.user,
      text: props.text
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: nextProps.time,
      user: nextProps.user,
      text: nextProps.text
    });
  }

  render() {
    return (
      <div className="message">
        <div className="message-header">
          <span className="message-user">
            { `${this.state.user} ` }
          </span>
          <span className="message-time">
            { `( ${this.state.time} )` }
          </span>
        </div>
        <div className="message-body">
          { this.state.text }
        </div>
      </div>
    );
  }
}
