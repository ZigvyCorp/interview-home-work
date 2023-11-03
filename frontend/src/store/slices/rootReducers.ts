import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

export default combineReducers({
  posts: postReducer,
});
