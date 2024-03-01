import { combineReducers } from "redux";
import postReducer from "pages/posts/redux/posts.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
