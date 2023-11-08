import { API_ENDPOINTS } from "@/apis";
import { axiosClient } from "@/shared";

export const BLOGS_SERVICES = {
  getPosts: () => {
    return axiosClient.get(API_ENDPOINTS.GET_POSTS);
  },
};
