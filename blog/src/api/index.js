import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const getAllPosts = () => api.get(`/posts`);
export const getPostById = (id) => api.get(`/posts/${id}`);
export const getUserById = (id) => api.get(`/users/${id}`);

const apis = {
  getAllPosts,
  getPostById,
  getUserById
}

export default apis;