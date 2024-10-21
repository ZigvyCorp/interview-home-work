import { combineReducers } from 'redux';
import postsReducer from '../reducers/postsReducers';
import commentsReducer from '../reducers/commentsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  Comments: commentsReducer,
});

export default rootReducer;
