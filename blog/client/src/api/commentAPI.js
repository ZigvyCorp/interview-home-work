import axiosClient from "./axiosClient";
export const getCommentAPI = (id)=>{
    const path = `/comments?postId=${id}`;
    return axiosClient.get(path)
}
export const getAllCommentAPI = (id)=>{
    const path = `/comments`;
    return axiosClient.get(path)
}