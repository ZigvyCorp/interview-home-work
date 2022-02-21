import axiosClient from "./axiosClient";
export const getUserAPI = (id)=>{
    const path = `/users`;
    return axiosClient.get(path)
}