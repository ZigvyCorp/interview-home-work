import axiosClient from "./axiosClient";

const getListPost = async (currentPage, perPage, query) => {
  const title = query || "";
  const response = await axiosClient.get(
    `/posts?title=${title}&page=${currentPage || 1}&perPage=${perPage || 2}`
  );
  return response.data;
};

const getPostById = async (postId) => {
  const response = await axiosClient.get(`/posts/${postId}`);
  return response.data;
};

const postApi = { getListPost, getPostById };

export default postApi;
