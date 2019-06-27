import * as React from 'react';
import { GlobalContext, defaultState } from './context';

export default ({ children }) => {
  const [state, setState] = React.useState(defaultState);
  const actions = {
    increment() {
      setState({
        ...state,
        count: state.count + 1,
      });
    },
  }
  return (
    <GlobalContext.Provider value={{ ...state, ...actions }}>
      {children}
    </GlobalContext.Provider>
  );
};
