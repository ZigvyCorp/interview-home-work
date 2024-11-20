import { axiosInstance } from ".";

export const getPostDetail =  (id: string) => axiosInstance.get( `/posts/${id}`)