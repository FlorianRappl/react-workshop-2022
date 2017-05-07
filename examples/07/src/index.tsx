import * as React from 'react';

interface MyComponentProps {
  // Props here
}

interface MyComponentState {
  // State here
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  foo: string;

  constructor(props: MyComponentProps) {
    super(props);
  }

  changeMember(newValue: string) {
    this.foo = newValue;
    this.forceUpdate();
  }

  render() {
    return (
      <span>
        { this.foo }
      </span>
    );
  }
}
