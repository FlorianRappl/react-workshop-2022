import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = ({ match }) => {
  // ...
  return <div>Current id is {match.params.id}</div>;
};

const NoMatch = ({ location, history }) => (
  <div>
    The route {location.path} cannot be found!
    <button onClick={history.back}>Go back</button>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home/:id?" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
