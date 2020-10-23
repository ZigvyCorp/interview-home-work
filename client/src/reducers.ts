import { combineReducers } from 'redux';
import { reducer as postReducers } from './pages/reducers';
export default combineReducers({ posts: postReducers });
