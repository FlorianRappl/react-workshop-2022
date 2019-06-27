import * as React from 'react';
import { render } from 'react-dom';

const initialValue = {};
const Context = React.createContext(initialValue);

export const GlobalState = ({ children }) => {
  const [state, setState] = React.useState(initialValue);
  const doX = x => setState({ ...state, x });
  return (
    <Context.Provider value={{ state, doX }}>
      {children}
    </Context.Provider>
  );
};

const App = () => (
  <>
    <GlobalState>
      <div>
        Here is some content
      </div>
    </GlobalState>
  </>
);

render(<App />, document.querySelector('#app'));
