import * as React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import SendMessage from './sendMessage';
import Messages from './messages';

class ConversationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  // handles the logout
  logout() {
    const dispatch = this.props.dispatch;

    if (dispatch) {
      dispatch({ type: 'logout' });
    }
  }

  render() {
    return (
      <div>
        <h1>
          Conversation
        </h1>
        <div>
          <Users />
          <Messages />
          <SendMessage />
        </div>
        <button onClick={() => this.logout()}>
          Logout
        </button>
      </div>
    );
  }
}

export default connect()(ConversationScreen);
