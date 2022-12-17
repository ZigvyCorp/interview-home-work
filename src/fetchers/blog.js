import axios from 'axios';

const limit = 10;

const getPosts = async (page = 1) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  return response.data;
};

const getPostItem = async (postId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return response.data;
};

const getComments = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/comments'
  );

  return response.data;
};

const getCommentByPost = async (postId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return response.data;
};

export { getPosts, getComments, getPostItem, getCommentByPost };
