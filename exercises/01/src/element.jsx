import * as React from 'react';

const spanStyle = {
  fontFamily: 'Consolas', 
  textDecoration: 'underline'
};

// Changes required below this line

const Hello = (props) => (
<div>
  <div>
    <strong>
      Hello!
    </strong>
    &nbsp;
    Welcome,
    &nbsp;
    <span style={ spanStyle }>
      <span style={{ color: 'green' }}>
        { props.firstName }
      </span>
      &nbsp;
      <span style={{ color: 'red' }}>
        { props.lastName }
      </span>
    </span>.
  </div>
  {
    (props.showCorrect) ? (
      <div>
        Not your name? Click <a href="#">here</a> to correct ...
      </div>
    ) : (false)
  }
</div>
)

export default (
  <Hello firstName="Your"
         lastName="Name"
         showCorrect={true} />
);
