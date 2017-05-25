import * as React from 'react';
import { connect } from 'react-redux';
import Message from './message';

// Redux connected component to control messages
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages || []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages || []
    });
  }

  render() {
    return (
      <div>
        {
          this.state.messages.map((message) => (
            <Message key={message.id}
                     time={message.time}
                     user={message.from}
                     text={message.text} />
          ))
        }
      </div>
    );
  }
}

export default connect((state) => ({ messages: state.conversation.messages }))(Messages);
