import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import commentSlice from "./slices/commentSlice";
import searchPostslice from "./slices/searchPostslice";
import authSlice from "./slices/authSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  posts: postSlice,
  comments: commentSlice,
  searchPosts: searchPostslice,
  auth: authSlice,
});

export { rootPersistConfig, rootReducer };
