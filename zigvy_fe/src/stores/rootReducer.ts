import { blogReducer } from "@/modules/blogs";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  blog: blogReducer,
  // auth: authReducer,
  //   service: serviceReducer,
});
