import { CreatePost, FetchPost, Post } from "../types/Post/types";
import axiosService from "./axiosService";

const postApi = {
  fetchPost: ({ page, search }: { page: number; search: string }) =>
    axiosService.get<ApiBaseResponse<FetchPost>>(
      `/post/get-all-post?page=${page}&title=${search}`
    ),
  createPost: (body: CreatePost) =>
    axiosService.post<ApiBaseResponse<Post>>(
      "/post/create-post",
      body
    ),
};

export default postApi;
