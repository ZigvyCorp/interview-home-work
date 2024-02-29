import axiosInstance from "../utils/axiosInstance";

const blogService = {
  getBlogs(query = "") {
    return axiosInstance.get(`/posts${query}`);
  },
  getBlogById(id) {
    return axiosInstance.get(`/posts/${id}`);
  },
};

export default blogService;
