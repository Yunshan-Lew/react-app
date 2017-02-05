import { combineReducers } from 'redux';
import todos from './reducer1';

const todoApp = combineReducers({
	todos
})

export default todoApp