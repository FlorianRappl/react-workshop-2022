import * as React from 'react';

interface MyButtonProps {
  color: string;
  shadowSize: number;
}

interface MyButtonState {
}

// More on this later
class MyButton extends React.Component<MyButtonProps, MyButtonState> {
  render(): JSX.Element {
    return null;
  }
}

const buttonInstance = (
  <MyButton color="blue" /* A standard string value as prop */
            shadowSize={2} /* Passing on a number */ >
    <span style={{ color: 'red' }} /* Passing on an object */ > 
      Hello! { /* A standard string can also be a child */ }
    </span>
  </MyButton>
);
