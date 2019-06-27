import * as React from 'react';
import { render } from 'react-dom';

const MyButton = () => {
  const el = React.useRef(undefined);
  React.useEffect(() => {
    if (el.current)
      el.current.style.color = 'red';
    return () => {};
  }, [el.current]);
  return <button ref={el}>Legacy</button>;
}

const App = () => (
  <>
    <MyButton />
  </>
);

render(<App />, document.querySelector('#app'));
