import axios from "axios";

export const fetchPostsFromAPI = async (params) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/post`, {
      params,
    });
    return await response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/${id}`);
    return await response.data;
  } catch (error) {
    throw error;
  }
};
