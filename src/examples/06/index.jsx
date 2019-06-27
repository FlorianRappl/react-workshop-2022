import * as React from 'react';
import { render } from 'react-dom';

const MyForm = () => {
  const [name, setName] = React.useState('');
  return <input value={name} onChange={e => setName(e.target.value)} />;
};

const App = () => (
  <>
    <MyForm />
  </>
);

render(<App />, document.querySelector('#app'));
