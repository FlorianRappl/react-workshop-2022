import * as React from 'react';
import { connect } from 'react-redux';
import { State } from './store';

interface DisplayCountProps {
  count: number;
}

const DisplayCount = (props: DisplayCountProps) => (
  <div>
    <span>
      The current count is <strong>{props.count}</strong>!
    </span>
  </div>
);

export default connect((state: State) => ({ count: state.count }))(DisplayCount);
