const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com/comments";

// Get all comments from the external API
const getAllComments = async (offset = 0, limit = 100) => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;
    const paginatedData = data.slice(offset, offset + limit);
    return paginatedData;
  } catch (error) {
    throw new Error("Error fetching comments from external API");
  }
};

// Get comment by ID from the external API
const getCommentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching comment by ID from external API");
  }
};

// Get comments with query param postId
const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: { postId },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching comments by post ID from external API");
  }
};

// Create a new comment (mock API, won't persist data)
const createComment = async (comment) => {
  try {
    const response = await axios.post(BASE_URL, comment);
    return response.data;
  } catch (error) {
    throw new Error("Error creating comment in external API");
  }
};

// Update a comment (mock API, won't persist data)
const updateComment = async (id, comment) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, comment);
    return response.data;
  } catch (error) {
    throw new Error("Error updating comment in external API");
  }
};

// Delete a comment (mock API, won't persist data)
const deleteComment = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error deleting comment from external API");
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  getCommentsByPostId,
  createComment,
  updateComment,
  deleteComment,
};
