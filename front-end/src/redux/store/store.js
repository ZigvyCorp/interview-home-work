import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../reducers/postReducer";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
