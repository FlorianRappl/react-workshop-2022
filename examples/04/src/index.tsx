import * as React from 'react';

// Declaration of the types of props
interface MyComponentProps {
  // Props here
}

// Declaration of the types of state - see later
interface MyComponentState {
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
  }

  // called when properties are changed (only possible from outside)
  componentWillReceiveProps(nextProps: MyComponentProps): void {
    // we could now set a different state; otherwise
    // re-rendering may not take place
  }

  // called right before a render, i.e., between setState and render
  shouldComponentUpdate(nextProps: MyComponentProps, nextState: MyComponentState): boolean {
    // accept the update request - false would deny it
    return true;
  }

  render() {
    return (
      <div />
    ); 
  }
}
