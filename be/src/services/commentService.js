const axiosClient = require("axios");

const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";

const executeRequest = async (apiCall) => {
  try {
    const result = await apiCall();
    return result.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Request error");
  }
};

const fetchAllComments = async (offset = 0, limit = 100) => {
  const allComments = await executeRequest(() => axiosClient.get(COMMENTS_API));
  return allComments.slice(offset, offset + limit);
};

const fetchCommentById = async (commentId) => {
  return executeRequest(() => axiosClient.get(`${COMMENTS_API}/${commentId}`));
};

const fetchCommentsByPostId = async (postId) => {
  return executeRequest(() => axiosClient.get(COMMENTS_API, { params: { postId } }));
};

const addComment = async (newComment) => {
  return executeRequest(() => axiosClient.post(COMMENTS_API, newComment));
};

const modifyComment = async (commentId, updatedComment) => {
  return executeRequest(() => axiosClient.put(`${COMMENTS_API}/${commentId}`, updatedComment));
};

const removeComment = async (commentId) => {
  return executeRequest(() => axiosClient.delete(`${COMMENTS_API}/${commentId}`));
};

module.exports = {
  fetchAllComments,
  fetchCommentById,
  fetchCommentsByPostId,
  addComment,
  modifyComment,
  removeComment,
};
