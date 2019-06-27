import * as React from 'react';
import { MyContext } from './context';

export const MyComponent = () => {
  const { theme } = React.useContext(MyContext);
  const cssClass = `container-${theme}`;
  return <div className={cssClass}>Hello!</div>;
};
