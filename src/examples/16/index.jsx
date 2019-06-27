import * as React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

function testButton() {
  let testButton;
  const element = <button ref={node => (testButton = node)}>Click me!</button>;
  ReactTestUtils.renderIntoDocument(element);
  ReactTestUtils.Simulate.click(testButton);
}

testButton();
