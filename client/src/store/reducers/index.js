import { combineReducers } from 'redux';
import postsReducer from './post';

const rootReducer = combineReducers({
  post: postsReducer,
});

export default rootReducer;