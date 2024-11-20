import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postSlice";
import commentReducer from "./reducers/commentSlice";
import userReducer from "./reducers/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  postReducer,
  commentReducer,
  userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

// Store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
// cartReducer.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

// Export
export default store;
