import postApi from "@/features/post/post.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsThunk = createAsyncThunk("posts/getPosts", async () => {
  try {
    const posts = await postApi.getPosts();
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
