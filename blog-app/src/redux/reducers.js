import { combineReducers } from "redux";
import postsReducer from "./postsSlice"; // Adjust according to your setup

const rootReducer = combineReducers({
  posts: postsReducer,
  // Add other reducers here
});

export default rootReducer;
