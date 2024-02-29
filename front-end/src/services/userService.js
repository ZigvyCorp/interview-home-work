import axiosInstance from "../utils/axiosInstance";

const userService = {
  getUsers(query = "") {
    return axiosInstance.get(`/users${query}`);
  },
};

export default userService;
