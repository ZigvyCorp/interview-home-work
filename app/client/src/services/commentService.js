import { http } from "./httpService";

export const getAllCommentsByPostId = async (id) => {
  const response = await http.get(`/comments/list/${id}`);
  return response.data;
};
