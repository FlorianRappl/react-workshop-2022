import * as React from 'react';
import { render } from 'react-dom';
import { MyContext } from './context';
import { MyComponent } from './Component';

const HomePage = () => {
  return <MyComponent />;
}

const App = () => (
  <div>
    <MyContext.Provider value={{ theme: 'light' }}>
      <HomePage />
    </MyContext.Provider>
    <MyContext.Provider value={{ theme: 'dark' }}>
      <HomePage />
    </MyContext.Provider>
  </div>
);

render(<App />, document.querySelector('#app'));
