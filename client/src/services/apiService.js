import axios from "axios";

const apiClient = axios.create({
  baseURL: "",
});

const getPosts = async () => {
  const { data } = await apiClient.get("/api/posts");
  return data;
};

const getPostComments = async (postId) => {
  const { data } = await apiClient.get(`/api/posts/${postId}/comments`);
  return data;
};
const getUserById = async (userId) => {
  const { data } = await apiClient.get(`/api/users/${userId}`);
  const { user } = data;
  return user;
};

const ApiService = {
  getPosts,
  getPostComments,
  getUserById,
};

export default ApiService;
