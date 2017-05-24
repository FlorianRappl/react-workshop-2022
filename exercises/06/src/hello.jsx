import * as React from 'react';
import { incrementCount } from './actions';
import { connect } from 'react-redux';

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

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.count
    });
  }

  render() {
    return (
      <div onClick={() => incrementCount()}>
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

export default connect((state) => ({ count: state.hello.count }))(MyComponent);
