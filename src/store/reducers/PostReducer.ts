import { createReducer } from "@reduxjs/toolkit";
import { PostActionType } from "../actionTypes";
import { Posts } from "../../API/Post/Interface";

const initialState: {
  posts: Posts.PostList;
  post: Posts.Post;
} = {
  posts: [],
  post: {},
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      PostActionType.setPosts,
      (state: { [key: string]: any }, action: { [key: string]: any }) => {
        state.posts = action.payload;
      }
    )
    .addCase(
      PostActionType.setPostsDetail,
      (state: { [key: string]: any }, action: { [key: string]: any }) => {
        state.post = action.payload;
      }
    )
);
