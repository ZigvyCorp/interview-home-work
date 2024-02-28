import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  getPosts: async () => {
    const response = await api.get("/posts");
    return response.data;
  },
  getPostsAuthor: async () => {
    const response = await api.get("/posts/getAll");
    return response.data;
  },

  getPostById: async (postId) => {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  },
};

export default apiService;
