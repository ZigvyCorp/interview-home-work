import axiosInstance from "../configs/axios";
import { ListResponse } from "../types/common";
import { IComment } from "../types/comment";

const postsApi = {
  async getAllPosts() {
    const res = await axiosInstance.get("/posts");
    return res;
  },

  async getPostsById(id: string) {
    const res = await axiosInstance.get(`/posts/${id}`);
    return res;
  },

  async getAllCommentByPostsId(postId: string, page: number, limit: number) {
    const res = await axiosInstance.get(`/posts/${postId}/comments`, {
      params: {
        page,
        limit,
      },
    });
    return res as unknown as ListResponse<IComment>;
  },

  async createComment(postId: string, content: string) {
    const res = await axiosInstance.post(`/posts/${postId}/comments`, {
      content,
    });
    return res;
  },
};

export default postsApi;
