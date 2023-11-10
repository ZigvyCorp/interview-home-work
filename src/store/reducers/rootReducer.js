import { combineReducers } from 'redux';
import { postsReducer, testReducer, usersReducer, commentsReducer } from './reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  test: testReducer,
});

export default rootReducer;
