import * as React from 'react';

// Declaration of the types of props
interface MyComponentProps {
  // Props here
}

// Declaration of the types of state - see later
interface MyComponentState {
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  // we don't need to put props here, but we need
  // to in order to access this.props in the constructor
  constructor(props: MyComponentProps) {
    // if props is omitted React sets .props on the instance from the
    // outside immediately after calling the constructor.
    super(props);
  }

  // only requirement; we need a render function
  render() {
    // return statement would otherwise close with new line
    return (
      <div />
    ); 
  }
}
