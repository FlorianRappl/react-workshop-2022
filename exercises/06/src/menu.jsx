import * as React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <ul>
    <li>
      <Link to="/home">
        Home
      </Link>
    </li>
    <li>
      <Link to="/hello">
        Hello Component
      </Link>
    </li>
    <li>
      <Link to="/todo">
        Todo List
      </Link>
    </li>
    <li>
      <Link to="/foo">
        Invalid link
      </Link>
    </li>
  </ul>
);
