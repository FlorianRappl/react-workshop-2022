import * as React from 'react';

// Declaration of the types of props
interface MyComponentProps {
  // Props here
}

// Declaration of the types of state
interface MyComponentState {
  // State here
  count: number;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    // sets the initial value of the state, don't use setState here!
    this.state = {
      count: 0
    };
  }

  // a simple (custom) helper function
  private changeState(count: number) {
    // use setState to trigger a change of state - never use this.state
    // to mutate the state
    this.setState({
      count
    });
  }

  render() {
    return (
      <div>
        { /* Output values of the current state */ }
        <span>
          Current value is <b>{this.state.count}</b>.
        </span>
        { /* Add a button to trigger a state change */ }
        <button onClick={() => this.changeState(this.state.count + 1)}>
          Increase
        </button>
      </div>
    );
  }
}
