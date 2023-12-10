import { CommentResponse, CreateComment } from "../types/Comment/types";
import axiosService from "./axiosService";

const commentApi = {
  fetchComments: (postId: number) =>
    axiosService.get<ApiBaseResponse<CommentResponse>>(
      `/comment/get-comments/${postId}`
    ),
  createComment: ({postId, body} : {postId: number, body: CreateComment}) =>
    axiosService.post<ApiBaseResponse<CommentResponse>>(
      `/comment/create-comment/${postId}`,
      body
    ),
};

export default commentApi;
