import { combineReducers } from "@reduxjs/toolkit";
import { pageReducer } from "./pageReducer";
import { postReducer } from "./postReducer";
import { loadingReducer } from "./loadingReducer";

export const rootReducer = combineReducers({
  pages: pageReducer,
  posts: postReducer,
  loading: loadingReducer
});
