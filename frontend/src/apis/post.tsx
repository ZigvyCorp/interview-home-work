import axios from "../axios";

export const apiGetAllPosts = (params: any) =>
  axios({
    url: `/posts`,
    method: "get",
    params,
  });
export const apiGetPost = (id: any) =>
  axios({
    url: `/posts/${id}`,
    method: "get",
  });

export const apiGetAllComments = (id: any) =>
  axios({
    url: `/posts/${id}/comments`,
    method: "get",
  });
