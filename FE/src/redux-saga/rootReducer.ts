import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { POSTS_SLICE_NAME } from "../constants/slice.constants";
import { postReducer } from "./slices/posts.slice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [POSTS_SLICE_NAME],
};

const rootReducer = combineReducers({
  [POSTS_SLICE_NAME]: persistReducer(persistConfig, postReducer),
});

export default rootReducer;
