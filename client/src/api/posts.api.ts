import axiosInstance from "../configs/axios";

const postsApi = {
  async getAllPosts() {
    const res = await axiosInstance.get("/posts");
    return res;
  },
};

export default postsApi;
