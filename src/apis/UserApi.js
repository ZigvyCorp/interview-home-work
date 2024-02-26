import axiosInstance from "./axiosInstance";

const getUser = async (userId) => {
  return await axiosInstance.get(`/users/${userId}`);
};

export default {
    getUser,
};
