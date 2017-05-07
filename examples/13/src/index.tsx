import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter, RouteProps, RouteComponentProps } from 'react-router-dom';
import Secret from './secret';
import Home from '../../12/src/home';

// sample for demonstration purpose only
let loggedIn = false;

const PrivateRoute: React.SFC<RouteProps> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

// This is a component function - i.e., a component
// reduced to a render function that comes with no
// state (pure component)
const NoMatch: React.SFC<RouteComponentProps<void>> = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const app = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <PrivateRoute path="/secret"
                    component={Secret} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);
