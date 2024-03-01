import axiosClient from "./axios-client";
import { COMMENT_URL } from "../configs";

export const commentServices = { getCommentsByPostId };

function getCommentsByPostId(postId) {
  return axiosClient.get(`${COMMENT_URL}?postId=${postId}`);
}