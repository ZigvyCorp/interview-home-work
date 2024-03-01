import HttpRequest from "helper/request.helper";
const path = "/comments";

export const getCommentsByPost = (postId) => {
  return HttpRequest.get(path, { params: { postId } });
};
