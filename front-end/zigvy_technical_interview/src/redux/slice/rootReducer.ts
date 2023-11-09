import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./post/postSlice";
import postIdReducer from "./post/postIdSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  postId: postIdReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
