import HttpRequest from "helper/request.helper";
const path = "/posts";

export const getPosts = (params = {}) => {
  return HttpRequest.get(path, { params });
};

export const getPostDetail = (postId) => {
  return HttpRequest.get(path + "/" + postId);
};

export const getPostComment = (postId) => {
  return HttpRequest.get(`${path}/${postId}/comments`);
};
