import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import userReducer from './user.reducer';



const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
