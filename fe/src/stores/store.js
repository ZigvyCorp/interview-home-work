import { configureStore } from "@reduxjs/toolkit";
import postStore from "./post.store";

export default configureStore({
  reducer: {
    posts: postStore,
  },
});
