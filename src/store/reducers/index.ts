import { combineReducers } from "@reduxjs/toolkit";
import LoadingReducer from "./LoadingReducer";
import PostReducer from "./PostReducer";
import CommentReducer from "./CommentReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  post: PostReducer,
  comment: CommentReducer,
  user: UserReducer,
});

export default rootReducer;
