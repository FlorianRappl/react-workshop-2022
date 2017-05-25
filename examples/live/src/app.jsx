import * as React from 'react';
import { connect } from 'react-redux';
import LoadingScreen from './loadingScreen';
import LoginScreen from './loginScreen';
import ConversationScreen from './conversationScreen';
import ErrorDialog from './errorDialog';

// Root (layout) of our application
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.progress || false,
      authorized: props.authorized || false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      progress: nextProps.progress || false,
      authorized: nextProps.authorized
    });
  }

  // Responsible for the main content selection
  content() {
    if (this.state.authorized) {
      return <ConversationScreen />;
    } else if (this.state.progress) {
      return <LoadingScreen />;
    } else {
      return <LoginScreen />;
    }
  }

  render() {
    return (
      <div>
        <ErrorDialog />
        {
          this.content()
        }
      </div>
    );
  }
}

// connects Redux to the layout
export default connect((state) => ({ 
  authorized: state.authorized, 
  progress: state.progress 
}))(App);
