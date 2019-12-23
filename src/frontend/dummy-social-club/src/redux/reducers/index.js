import { combineReducers } from 'redux';
import posts from './postReducer';
import sessions from './sessionReducer';

const rootReducer = combineReducers({
  posts,
  sessions
});

export default rootReducer;