import axiosClient from "./axiosClient";

const url = "/posts";

const postApi = {
  getPosts() {
    return axiosClient.get(url);
  },
  getPost(id: number) {
    return axiosClient.get(`${url}/${id}`);
  },
  getReplies(id: number) {
    return axiosClient.get(`${url}/${id}/comments`);
  },
};

export default postApi;
