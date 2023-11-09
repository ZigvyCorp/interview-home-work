import { combineReducers } from 'redux';

import postReducer from './reducer/postReducer';
import queryReducer from './reducer/queryReducer';

const rootReducer = combineReducers({
  query: queryReducer,
  posts: postReducer,
});
export default rootReducer;
