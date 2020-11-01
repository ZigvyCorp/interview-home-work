/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './reducer/AppReducer';
import posts from './reducer/PostReducer';
import users from './reducer/UserReducer';
import comments from './reducer/CommentReducer'
// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  users,
  comments
});
