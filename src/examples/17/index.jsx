import * as React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

function expect(value) {
  return {
    toEqual(other) {
      if (value !== other) {
        throw new Error('Mismatch - actual value does not match expected value.');
      }
    },
  };
}

const MyComponent = () => (
  <div>
    <h1>A title</h1>
    <p>Some body</p>
  </div>
);

class TestApp extends React.Component {
  render() {
    return <MyComponent />;
  }
}

function testComponent() {
  const component = ReactTestUtils.renderIntoDocument(<TestApp />);
  const node = ReactTestUtils.findRenderedDOMComponentWithTag(
    component, 'h1'
  );
  expect(findDOMNode(node).textContent).toEqual('A title');
}

testComponent();
