import * as React from 'react';
import { connect } from 'react-redux';

// A simple login screen component
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName || ''
    };
  }

  login() {
    const dispatch = this.props.dispatch;

    if (dispatch) {
      dispatch({ 
        type: 'login',
        userName: this.state.userName
      });
    }
  }

  changeUser(value) {
    this.setState({
      userName: value
    });
  }

  keyPress(key) {
    if (key === 'Enter') {
      this.login();
    }
  }

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>
        <div>
          <input value={this.state.userName}
                 onKeyPress={(ev) => this.keyPress(ev.key)}
                 onChange={(ev) => this.changeUser(ev.target.value)} />
        </div>
        <button onClick={() => this.login()}>
          Authorize me!
        </button>
      </div>
    );
  }
}

export default connect((state) => ({ userName: state.userName }))(LoginScreen);
