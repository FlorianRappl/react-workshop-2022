import * as React from 'react';

// A super simple loading component
// should also be thought of as a modal dialog
export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading">
        Loading in progress ...
      </div>
    );
  }
}
