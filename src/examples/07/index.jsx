import * as React from 'react';
import { render } from 'react-dom';

const MyComponent = props => {
  let [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSeconds(++seconds), 5000);
    // return disposer function
    return () => clearInterval(id);
  }, []); // run the effect only once
  return <div>{seconds}</div>;
};

const App = () => (
  <MyComponent />
);

render(<App />, document.querySelector('#app'));
