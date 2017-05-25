import * as React from 'react';
import { connect } from 'react-redux';

// very simple error dialog - should be thought of
// as a modal dialog
class ErrorDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message || ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      message: nextProps.message || ''
    });
  }

  // clears the given error, i.e., closes
  // the modal dialog
  clearError() {
    const dispatch = this.props.dispatch;

    if (dispatch) {
      dispatch({ type: 'clearError' });
    }
  }

  render() {
    const message = this.state.message;

    if (message) {
      return (
        <div>
          <div style={{ color: 'red', fontWeight: 'bold' }}>
            { this.state.message }
          </div>
          <div>
            <button onClick={() => this.clearError()}>
              OK
            </button>
          </div>
        </div>
      ); 
    }

    return false;
  }
}

export default connect((state) => ({ message: state.error }))(ErrorDialog);
