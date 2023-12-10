import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import blogReducer from "./blogSlice";
import commentReducer from "./commentSlice";
import userReduce from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReduce,
    blog: blogReducer,
    comment:commentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();