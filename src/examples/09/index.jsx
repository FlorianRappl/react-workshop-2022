import * as React from 'react';
import { render } from 'react-dom';

function useTimeout(fn, time) {
  React.useEffect(() => {
    const id = setTimeout(fn, time);
    return () => clearTimeout(id);
  }, [time]);
}

const MyForm = () => {
  const [disabled, setDisabled] = React.useState(true);
  useTimeout(() => setDisabled(false), 2000);
  return <button disabled={disabled}>Submit</button>;
};

const App = () => (
  <>
    <MyForm />
  </>
);

render(<App />, document.querySelector('#app'));
