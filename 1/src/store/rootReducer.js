import { combineReducers } from 'redux';
import postReducer from '../reducer/postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  // Các reducer khác nếu có
});

export default rootReducer;