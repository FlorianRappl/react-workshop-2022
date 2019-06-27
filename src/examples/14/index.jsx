import * as React from 'react';
import { render } from 'react-dom';

const MyContext = React.createContext('DWX...');

const MyComponent = () => {
  const name = React.useContext(MyContext);
  return <div>{name}</div>;
};

const App = () => (
  <>
    <MyContext.Provider value="DWX2019">
      <MyComponent />
    </MyContext.Provider>
  </>
);

render(<App />, document.querySelector('#app'));
