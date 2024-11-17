import axiosInstance from "../configs/axios";
import { ListResponse } from "../types/common";
import { IComment } from "../types/comment";
import { IGetAllCommentByPostsId, IGetAllPosts, IPosts } from "../types/posts";

const postsApi = {
  async getAllPosts(payload: IGetAllPosts) {
    const res = await axiosInstance.get("/posts", {
      params: payload,
    });
    return res as unknown as ListResponse<IPosts[]>;
  },

  async getPostsById(id: string) {
    const res = await axiosInstance.get(`/posts/${id}`);
    return res;
  },

  async getAllCommentByPostsId(payload: IGetAllCommentByPostsId) {
    const { postId, page, limit } = payload;
    const res = await axiosInstance.get(`/posts/${postId}/comments`, {
      params: {
        page,
        limit,
      },
    });
    return res as unknown as ListResponse<IComment[]>;
  },

  async createComment(postId: string, content: string) {
    const res = await axiosInstance.post(`/posts/${postId}/comments`, {
      content,
    });
    return res;
  },
};

export default postsApi;
