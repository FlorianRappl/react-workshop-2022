import { todoReducer, helloReducer } from './reducer';
import * as todo from './reducers/todo';
import * as hello from './reducers/hello';

todoReducer.register('add', todo.add);
todoReducer.register('edit', todo.edit);
todoReducer.register('toggle', todo.toggle);
helloReducer.register('increment', hello.increment);
