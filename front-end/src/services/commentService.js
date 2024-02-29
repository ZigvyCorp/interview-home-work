import axiosInstance from "../utils/axiosInstance";

const commentService = {
  getComments(query = "") {
    return axiosInstance.get(`/comments${query}`);
  },
};

export default commentService;
