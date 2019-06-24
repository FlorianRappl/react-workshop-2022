import * as React from 'react';

const ClickCounterComponent: React.SFC = () => {
  // return tuple, provide initial value
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
