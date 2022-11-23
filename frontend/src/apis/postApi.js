import axiosService from "../utils/axiosService";

export const createPostApi = (title, content, tags) => {
  return axiosService.post("/posts", { title, content, tags });
};

export const createCommentApi = (post, content) => {
  return axiosService.post("/comments", { post, content });
};

export const getListPostApi = (page) => {
  return axiosService.get(`/posts?page=${page}&limit=10`);
};

export const getListCommentOfPost = (postId) => {
  return axiosService.get(`/comment/${postId}`);
};
