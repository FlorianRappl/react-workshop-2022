import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';

interface ButtonProps {
  wasClicked(message: string): void;
}

interface AppProps {
}

interface AppState {
  count: number;
}

const Button = (props: ButtonProps) => (
  <button onClick={() => props.wasClicked('was clicked')}>
    Example Action
  </button>
);

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <Button wasClicked={() => this.setState({ count: this.state.count + 1 })} />
      </div>
    );
  }
}

// Render component to test into the document (i.e., create instance)
const app = ReactTestUtils.renderIntoDocument(<App />) as App;

// Get the DOM button instance
const button = ReactTestUtils.findRenderedDOMComponentWithTag(app, 'button');

// Note that the app has not been clicked yet
console.log(app.state); // count: 0

// Simulate a click
ReactTestUtils.Simulate.click(button);

// We should see a change of state
console.log(app.state); // count: 1
