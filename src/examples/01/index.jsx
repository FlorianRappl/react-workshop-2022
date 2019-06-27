import * as React from 'react';

console.log(
  React.createElement(
    'div', // Name of the element to instantiate
    { className: 'sidebar' }, // Attributes of the element
    null, // Content of the element
  ),
);

console.log(<div className="sidebar" />);
