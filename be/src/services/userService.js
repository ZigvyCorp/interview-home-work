const axiosInstance = require("axios");

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

const executeApiCall = async (apiCall) => {
  try {
    const result = await apiCall();
    return result.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to process the request");
  }
};

const fetchAllUsers = async (startIndex = 0, count = 100) => {
  const users = await executeApiCall(() => axiosInstance.get(USERS_API_URL));
  return users.slice(startIndex, startIndex + count);
};

const fetchUserById = async (userId) => {
  return executeApiCall(() => axiosInstance.get(`${USERS_API_URL}/${userId}`));
};

const addUser = async (newUser) => {
  return executeApiCall(() => axiosInstance.post(USERS_API_URL, newUser));
};

const modifyUser = async (userId, updatedUser) => {
  return executeApiCall(() => axiosInstance.put(`${USERS_API_URL}/${userId}`, updatedUser));
};

const removeUser = async (userId) => {
  return executeApiCall(() => axiosInstance.delete(`${USERS_API_URL}/${userId}`));
};

module.exports = {
  fetchAllUsers,
  fetchUserById,
  addUser,
  modifyUser,
  removeUser,
};
