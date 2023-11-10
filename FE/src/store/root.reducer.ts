import { combineReducers } from "redux";
import { blogReducer } from "./features/blog/slice";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { createStore } from "@reduxjs/toolkit";
import { authorReducer } from "./features/author/slice";

const rootReducer = combineReducers({
  blog: blogReducer,
  author:authorReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default persistedReducer;
