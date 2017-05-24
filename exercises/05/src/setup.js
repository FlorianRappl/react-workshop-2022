import { register } from './reducer';
import add from './reducers/add';
import edit from './reducers/edit';
import toggle from './reducers/toggle';

register('add', add);
register('edit', edit);
register('toggle', toggle);
