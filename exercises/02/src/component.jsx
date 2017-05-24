import * as React from 'react';

// Changes required below this line

const spanStyle = {
  fontFamily: 'Consolas', 
  textDecoration: 'underline'
};

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
);

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.clicked = () => {
      const current = this.state.count;

      this.setState({
        count: current + 1
      });
    };
  }

  render() {
    return (
      <div onClick={this.clicked}>
        <Hello firstName="Your"
               lastName="Name"
               showCorrect={true} />
        <div>
          I was { this.state.count } times clicked.
        </div>
      </div>
    );
  }
}
