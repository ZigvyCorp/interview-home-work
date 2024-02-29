import postApi from "@/features/post/post.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsThunk = createAsyncThunk(
  "posts/getPosts",
  async (currentPage: number) => {
    try {
      const posts = await postApi.getPostPagination(currentPage, 10);
      return {
        posts,
        currentPage,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
