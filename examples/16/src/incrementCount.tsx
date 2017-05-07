import * as React from 'react';
import { incrementCount } from './actions';

const IncrementCount = () => (
  <div>
    <button onClick={incrementCount}>
      Increment!
    </button>
  </div>
);

export default IncrementCount;
