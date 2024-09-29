import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:3001/api/posts");
  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
  return response.data;
};

export const getPostComments = async (id: number) => {
  const response = await axios.get(`http://localhost:3001/api/posts/${id}/comments`);
  return response.data;
};