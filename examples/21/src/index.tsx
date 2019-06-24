import * as React from 'react';

const SecondsCounterComponent: React.SFC = () => {
  let [seconds, setSeconds] = React.useState(0);
  
  React.useEffect(() => {
    const id = setInterval(() => setSeconds(++seconds), 1000);
    // return disposer function
    return () => clearInterval(id);
  }, []); // run the effect only once

  return <div>{seconds}</div>;
};
