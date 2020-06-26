import {combineReducers} from 'redux';
import post from './post';
import user from './user';

const rootReducers = combineReducers({
	post,
	user
});
	
export default rootReducers;