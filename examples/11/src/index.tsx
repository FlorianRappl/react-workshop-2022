// The two most important aspects of the history library
import createHashHistory from 'history/createHashHistory';
import createBrowserHistory from 'history/createBrowserHistory';

// Let's see how we use (any of these) two factories
const hashHistory = createHashHistory();
const browserHistory = createBrowserHistory();

// The core API is always the same, e.g.,
function navigateBack() {
  hashHistory.goBack();
}
