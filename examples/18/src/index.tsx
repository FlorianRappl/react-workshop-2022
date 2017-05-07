import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import { findDOMNode } from 'react-dom';

// Just a simple skeleton to give you the idea
function expect(actual: any) {
  return {
    toEqual(expected: any) {
      return actual === expected;
    }
  };
}

// Take an arbitrary component for example
const MyComponent = () => (
  <div>
    <h1>A title</h1>
    <h2>The subtitle of this</h2>
    <p>Lorem ...</p>
  </div>
);

// Render the component into the document (works only in the browser!)
const component = ReactTestUtils.renderIntoDocument(
  <MyComponent />
) as React.Component<{}, {}>;

// Find (any) tag starting at the component's root
const node = ReactTestUtils.findRenderedDOMComponentWithTag(
  component, 'h1'
);

// Check for equality
expect(findDOMNode(node).textContent).toEqual('A title');
