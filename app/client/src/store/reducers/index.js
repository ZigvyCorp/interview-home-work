import { combineReducers } from "redux";
import postsReducer from "./postReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
