import * as React from 'react';
import { render } from 'react-dom';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

const MyComponent = () => (
  <div>
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense >
  </div>
);

const App = () => (
  <>
    <MyComponent />
  </>
);

render(<App />, document.querySelector('#app'));
