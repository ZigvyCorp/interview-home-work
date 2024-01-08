
import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
