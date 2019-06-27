import * as React from 'react';
import { render } from 'react-dom';

const MyButton = props => (
  <button
    style={{
      color: props.color,
      boxShadow: `0 0 ${props.shadowSize}px #888888`,
    }}>
    {props.children}
  </button>
);

const App = () => (
  <>
    <MyButton color="red" shadowSize={2}>
      Click me!
    </MyButton>
  </>
);

render(<App />, document.querySelector('#app'));
