// Utilities
import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async (): Promise<any> => {
  const response = await http.get('posts');

  return response.data;
}

export const getPostDetail = async (postId: number): Promise<any> => {
  const response = await http.get(`posts/${postId}`);

  return response.data;
}

export const getCommentsByPost = async (postId: number): Promise<any> => {
  const response = await http.get(`posts/${postId}/comments`);

  return response.data;
}

export const getUsers = async (): Promise<any> => {
  const response = await http.get('users');

  return response.data;
}

export default http;