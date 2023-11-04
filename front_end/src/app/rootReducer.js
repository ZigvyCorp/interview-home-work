import { combineReducers } from 'redux';
import usersReducer from './redux/users/usersSlice';
import postsReducer from './redux/posts/postsSlice';
import commentsReducer from './redux/comments/commentsSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
})

export default rootReducer;
