import { BlogState } from "./slice";

export const selectBlogs = (state: { blog: BlogState }) =>
  state.blog.blogs;
export const selectBlog = (state: { blog: BlogState }) =>
  state.blog.blog;
export const selectReplies = (state: { blog: BlogState }) =>
  state.blog.replies;
export const selectIsLoading = (state: { blog: BlogState }) =>
  state.blog.isLoading;
export const selectErrorMessage = (state: { blog: BlogState }) =>
  state.blog.error;

