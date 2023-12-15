import postsReducer from "src/store/reducers/post";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
