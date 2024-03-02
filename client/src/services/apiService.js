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
const getUsers = async () => {
  const { data } = await apiClient.get("/api/users");
  console.log(data);
  return data;
};

const ApiService = {
  getPosts,
  getPostComments,
  getUsers,
};

export default ApiService;
