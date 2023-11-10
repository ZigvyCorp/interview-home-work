/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "./axiosClient";

const postsApi = {
  getAllPosts() {
    const url = "/posts";
    return axiosClient.get(url);
  },
  addPost(data: any) {
    const url = "/posts";
    return axiosClient.post(url, data);
  },
  removeList(id: number) {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },
  updatePost(data: any) {
    const url = `/posts/update`;
    return axiosClient.post(url, data);
  },
};

export { postsApi };
