import * as React from 'react';
import { connect } from 'react-redux';

// Send a message via a simple control
// consisting of an input box and a
// send button
class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      disabled: props.disabled || false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      disabled: nextProps.disabled
    })
  }

  send() {
    const enabled = !this.state.disabled;
    const message = this.state.message;
    const dispatch = this.props.dispatch;

    if (enabled && message && dispatch) {
      dispatch({ 
        type: 'sendMessage',
        text: message
      });

      this.setState({
        message: ''
      });
    }
  }

  textChange(value) {
    this.setState({
      message: value
    });
  }

  keyPress(key) {
    if (key === 'Enter') {
      this.send();
    }
  }

  render() {
    return (
      <div>
        <input onKeyPress={(ev) => this.keyPress(ev.key)}
               onChange={(ev) => this.textChange(ev.target.value)}
               value={this.state.message} />
        <button onClick={() => this.send()}
                disabled={this.state.disabled}>
          Send
        </button>
      </div>
    );
  }
}

export default connect((state) => ({ disabled: state.progress }))(SendMessage);
