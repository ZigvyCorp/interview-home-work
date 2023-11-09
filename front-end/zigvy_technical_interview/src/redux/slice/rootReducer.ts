import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from "./post/postSlice";
import postIdReducer from "./post/postIdSlice";
import commentPostIdReducer from "./comment/commentPostIdSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  postId: postIdReducer,
  commentPostId: commentPostIdReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
