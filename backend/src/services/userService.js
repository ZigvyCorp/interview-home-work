const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Get all users from the external API
const getAllUsers = async (offset = 0, limit = 100) => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;
    const paginatedData = data.slice(offset, offset + limit);
    return paginatedData;
  } catch (error) {
    throw new Error("Error fetching users from external API");
  }
};

// Get user by ID from the external API
const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user by ID from external API");
  }
};

// Create a new user (mock API, won't persist data)
const createUser = async (user) => {
  try {
    const response = await axios.post(BASE_URL, user);
    return response.data;
  } catch (error) {
    throw new Error("Error creating user in external API");
  }
};

// Update a user (mock API, won't persist data)
const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    throw new Error("Error updating user in external API");
  }
};

// Delete a user (mock API, won't persist data)
const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error deleting user from external API");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
