import axiosClient from "./axios-client";

const getPosts = async (page, size, searchTerm) => {
  return axiosClient.get(`/api/posts?page=${page}&size=${size}&searchTerm=${searchTerm}`)
      .then((response) => response.data)
      .catch((error) => error.response.data);
}

const getPost = async (id) => {
  return axiosClient.get(`/api/posts/${id}`)
      .then((response) => response.data)
      .catch((error) => error.response.data);
}

export const postApi = {
    getPosts,
    getPost
}