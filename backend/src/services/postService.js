const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const USER_URL = "https://jsonplaceholder.typicode.com/users";

// Get all posts from the external API
const getAllPosts = async (offset = 0, limit = 100) => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;
    const responseUser = await axios.get(USER_URL);
    for (let i = 0; i < data.length; i++) {
      const user = responseUser?.data.find((e) => e = data[i].userId);
      data[i].authorName = user.name;
    }
    const paginatedData = data.slice(offset, offset + limit);
    return paginatedData;
  } catch (error) {
    throw new Error("Error fetching posts from external API");
  }
};

// Get post by ID from the external API
const getPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    const user = await getAuthorByPostId(response.data.userId);
    response.data.authorName = user.name;
    return response.data;
  } catch (error) {
    throw new Error("Error fetching post by ID from external API");
  }
};

// Get comments with query param postId
const getAllPostByUserId = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching comments by post ID from external API");
  }
};

// Get comments for a specific post by ID
const getPostComments = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching comments for the post from external API");
  }
};

// Create a new post (mock API, won't persist data)
const createPost = async (post) => {
  try {
    const response = await axios.post(BASE_URL, post);
    return response.data;
  } catch (error) {
    throw new Error("Error creating post in external API");
  }
};

// Update a post (mock API, won't persist data)
const updatePost = async (id, post) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, post);
    return response.data;
  } catch (error) {
    throw new Error("Error updating post in external API");
  }
};

// Delete a post (mock API, won't persist data)
const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error deleting post from external API");
  }
};

const getAuthorByPostId = async (id) => {
  try {
    const response = await axios.get(`${USER_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error get author from external API");
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  getPostComments,
  getAllPostByUserId,
  getAuthorByPostId,
  createPost,
  updatePost,
  deletePost,
};
