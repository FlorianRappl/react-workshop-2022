import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import Hello from '../../02/src/component';

// Some boilerplate code - just to avoid using a
// testing framework and keep it general

function assert(value, message) {
  if (!value) {
    throw new Error(`Test failed: ${message}.`);
  }
}

function getAllTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  let node;
  const textNodes = [];

  while(node = walker.nextNode()) {
    textNodes.push(node.nodeValue);
  }

  return textNodes;
}

const app = document.querySelector('#app');

app.innerHTML = '';

function print(message, color) {
  const div = app.appendChild(document.createElement('div'));
  div.style.color = color;
  div.textContent = message;
}

function runTest(id, name, test) {
  print(`Test ${id}: ${name}.`, 'black');
  try {
    test();
    print(`success`, 'green');
    return true;
  } catch (e) {
    print(`failed`, 'red');
    print(e.message, 'gray');
    return false;
  }
}

function runTests(tests) {
  let total = 0;
  let success = 0;
  print('Starting tests ...', 'black');

  for (const testName of Object.keys(tests)) {
    const test = tests[testName];

    if (runTest(++total, testName, test)) {
      success++;
    }
  }

  print('... all done!', 'black');
  print(`${success}/${total} passed.`, success === total ? 'green' : 'red');
}

// The actual tests

runTests({
  'clicking the component increases the count'() {
    const hello = React.createElement(Hello);
    const app = ReactTestUtils.renderIntoDocument(hello);
    const div = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div')[0];

    assert(app.state.count === 0, 'Initial count must be zero.');
    ReactTestUtils.Simulate.click(div);
    assert(app.state.count === 1, 'Clicked count must be one.');
  },

  'count is rendered correctly'() {
    const hello = React.createElement(Hello);
    const app = ReactTestUtils.renderIntoDocument(hello);
    const div = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div')[0];

    assert(getAllTextNodes(div).filter((m) => m === '0').length === 1, 'Initially renders 0 count.');
    ReactTestUtils.Simulate.click(div);
    assert(getAllTextNodes(div).filter((m) => m === '1').length === 1, 'Clicked renders 1 count.');
  },

  'name is displayed'() {
    const hello = React.createElement(Hello);
    const app = ReactTestUtils.renderIntoDocument(hello);
    const div = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div')[0];
    const texts = getAllTextNodes(div);
    const firstIndex = texts.indexOf('Your');
    const lastIndex = texts.indexOf('Name');

    assert(firstIndex !== -1, 'First name is rendered.');
    assert(lastIndex > firstIndex, 'Last name is rendered after first name.');
  }
});
