import axios from "axios";

export const fetchCommentFromAPI = async (params) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/comment`, {
      params,
    });
    return await response.data;
  } catch (error) {
    throw error;
  }
};
