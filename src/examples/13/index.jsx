import * as React from 'react';
import { render } from 'react-dom';

//Create with initial value
const MyContext = React.createContext({ theme: 'light' });

const App = () => (
  <MyContext.Provider value={{ theme: 'dark' }}>
    {/* layout etc. */}
  </MyContext.Provider>
);

render(<App />, document.querySelector('#app'));
