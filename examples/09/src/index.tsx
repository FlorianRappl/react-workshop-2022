import * as React from 'react';
// Import the ReactDOM module for this example
import * as ReactDOM from 'react-dom';

function callback() {
  // something changed ...
}

ReactDOM.render(
  // what to render - usually our layout or app, e.g., <App />
  <div />,
  // where to attach the React DOM to - document.body is
  // also valid, but may be a bad idea
  document.querySelector('#app'),
  // optional: after insert / update operation
  callback
);
