import axiosClient from "./axiosClient";
export const getPostAPI = (id)=>{
    const path = "/posts/"+id
    return axiosClient.get(path)
}

export const getAllPostAPI = (id)=>{
    const path = "/posts"
    return axiosClient.get(path)
}