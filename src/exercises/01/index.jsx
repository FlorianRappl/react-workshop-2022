import * as React from 'react';
import { render } from 'react-dom';

const spanStyle = {
  fontFamily: 'Consolas',
  textDecoration: 'underline',
};

const green = {
  color: 'green',
};

const red = {
  color: 'red',
};

const element = (
  <div className="my-class">
    <div>
      <strong>Hello!</strong> Welcome,{' '}
      <span style={spanStyle}>
        <span style={green}>Florian</span> <span style={red}>Rappl</span>
      </span>
      .
    </div>
    <div>
      Not your name? Click <a href="#">here</a> to correct ...
    </div>
  </div>
);

render(element, document.querySelector('#app'));
