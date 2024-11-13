const axiosInstance = require("axios");

const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const executeApiCall = async (apiCall) => {
  try {
    const result = await apiCall();
    return result.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to process request");
  }
};

const fetchAllPosts = async (start = 0, count = 100) => {
  const posts = await executeApiCall(() => axiosInstance.get(POSTS_ENDPOINT));
  const users = await executeApiCall(() => axiosInstance.get(USERS_ENDPOINT));

  const userDictionary = Object.fromEntries(users.map(user => [user.id, user.name]));

  const paginatedPosts = posts.slice(start, start + count).map(post => {
    return { ...post, authorName: userDictionary[post.userId] || 'Unknown' };
  });

  return paginatedPosts;
};

const fetchPostById = async (postId) => {
  const post = await executeApiCall(() => axiosInstance.get(`${POSTS_ENDPOINT}/${postId}`));
  const author = await fetchAuthorByUserId(post.userId);
  return { ...post, authorName: author.name };
};

const fetchPostsByUserId = async (userId) => {
  return executeApiCall(() => axiosInstance.get(POSTS_ENDPOINT, { params: { userId } }));
};

const fetchPostComments = async (postId) => {
  return executeApiCall(() => axiosInstance.get(`${POSTS_ENDPOINT}/${postId}/comments`));
};

const addPost = async (newPost) => {
  return executeApiCall(() => axiosInstance.post(POSTS_ENDPOINT, newPost));
};

const modifyPost = async (postId, updatedPost) => {
  return executeApiCall(() => axiosInstance.put(`${POSTS_ENDPOINT}/${postId}`, updatedPost));
};

const removePost = async (postId) => {
  return executeApiCall(() => axiosInstance.delete(`${POSTS_ENDPOINT}/${postId}`));
};

const fetchAuthorByUserId = async (userId) => {
  return executeApiCall(() => axiosInstance.get(`${USERS_ENDPOINT}/${userId}`));
};

module.exports = {
  fetchAllPosts,
  fetchPostById,
  fetchPostComments,
  fetchPostsByUserId,
  fetchAuthorByUserId,
  addPost,
  modifyPost,
  removePost,
};
