import * as React from 'react';
import { render } from 'react-dom';

const MyComponent = props => {
  // return tuple, provide initial value
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  );
};

const App = () => (
  <>
    <MyComponent />
  </>
);

render(<App />, document.querySelector('#app'));
