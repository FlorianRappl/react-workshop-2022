import * as React from 'react';

interface MyComponentProps {
  // Props here
}

interface MyComponentState {
  // State here
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  // Direct capture of DOM element
  capturedDiv: HTMLDivElement;

  constructor(props: MyComponentProps) {
    super(props);
  }

  render() { 
  	/* with ref we can capture the node - but be very careful with this! */
  	return (
      <div ref={(node) => { this.capturedDiv = node; }} />
    );
  }
}