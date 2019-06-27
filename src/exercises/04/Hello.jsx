import * as React from 'react';

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

const Correct = () => (
  <div>
    Not your name? Click <a href="#">here</a> to correct ...
  </div>
);

const Hello = ({ firstName, lastName, showCorrect }) => {
  const [count, setCount] = React.useState(0);
  const s = count !== 1 ? 's' : '';
  return (
    <div className="my-class" onClick={() => setCount(count + 1)}>
      <div>
        <strong>Hello!</strong> Welcome,{' '}
        <span style={spanStyle}>
          <span style={green}>{firstName}</span> <span style={red}>{lastName}</span>
        </span>
        {showCorrect && <Correct />}
        <div>
          Currently {count} click{s}.
        </div>
      </div>
    </div>
  );
};

export default () => <Hello firstName="Florian" lastName="Rappl" showCorrect={true} />;
