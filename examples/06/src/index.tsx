import * as React from 'react';

// Declaration of the types of props
interface MyComponentProps {
  // Props here
}

// Declaration of the types of state
interface MyComponentState {
  // State here
  foo: string;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      foo: ''
    };
  }

  render() {
  	// bind value to foo and also update this value
  	// on changing the input (otherwise = readonly)
    return (
      <input value={this.state.foo}
             onChange={(ev) => this.setState({ foo: ev.target.value })} />
    );
  }
}
