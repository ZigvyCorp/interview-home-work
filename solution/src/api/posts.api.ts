import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
};

export const getPostComments = async (id: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return response.data;
};

