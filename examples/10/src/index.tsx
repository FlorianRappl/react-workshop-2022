import * as React from 'react';
// Import the ReactDOM server for this example
import * as ReactDOMServer from 'react-dom/server';

// transform the component instance to a valid React string,
// i.e., a string that contains HTML code with React annotations
// this will enable progressive enhancement
const str = ReactDOMServer.renderToString(
  <div style={{ color: 'red', fontWeight: 'bold' }} />
);
