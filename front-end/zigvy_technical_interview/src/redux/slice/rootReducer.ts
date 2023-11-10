import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from "./post/postSlice";
import postIdReducer from "./post/postIdSlice";
import commentPostIdReducer from "./comment/commentPostIdSlice";
import userIdReducer from "./user/userIdSlice";

const rootReducer = combineReducers({
  userIdReducer: userIdReducer,
  posts: postsReducer,
  postId: postIdReducer,
  commentPostId: commentPostIdReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
