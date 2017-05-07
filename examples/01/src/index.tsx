// Never forget to import React (unless used as a global)
// it will be used in the compiled source - even though we
// potentially don't see it due to JSX
import * as React from 'react';

// Directly create an element instance
const div1 = React.createElement(
  // Name of the element to instantiate
  'div',
  // Attributes of the element - called props
  { 
    className: 'sidebar' 
  },
  // Content of the element
  null 
);

// Create a new element instance via JSX tooling
const div2 = <div className="sidebar" />;