import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postsSlice";
import searchPostReducer from "./searchPostsSlice";

const rootReducer = combineReducers({
  dataPosts: postReducer,
  dataSearchPosts: searchPostReducer,
});

export default rootReducer;
