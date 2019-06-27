import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Simulate, renderIntoDocument } from 'react-dom/test-utils';
import Hello from './Hello';

function expect(value) {
  return {
    toBe(other) {
      if (value !== other) {
        throw new Error(`Mismatch - actual value "${value}" does not match expected value "${other}".`);
      }

      console.log(`Actual value "${value}" matches expected value "${other}".`);
    },
  };
}

const mount = element => {
  class TestApp extends React.Component {
    render() {
      return element;
    }
  }

  return renderIntoDocument(<TestApp />);
};

function componentTest() {
  const root = mount(<Hello firstName="John" lastName="Tester" />);
  const div = findDOMNode(root);
  const counter = div.querySelector('.counter');
  const fullName = div.querySelector('.full-name');
  expect(fullName.textContent).toBe('John Tester');
  expect(counter.textContent).toBe('0');
  Simulate.click(div);
  expect(counter.textContent).toBe('1');
}

componentTest();
