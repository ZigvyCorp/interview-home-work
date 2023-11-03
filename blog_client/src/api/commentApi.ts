import { Comment } from "../models/comment";
import axiosClient from "./axiosClient";

const commentApi = {
  getCommentsForPost(post_id: number): Promise<Comment[]> {
    const url = `/posts/${post_id}/comments`;
    return axiosClient.get(url);
  },
};

export default commentApi;
