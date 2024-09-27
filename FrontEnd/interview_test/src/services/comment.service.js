
import { axiosInstance } from ".";


export const getCommentByPostId = (postId) => {
    return axiosInstance.get(`/api/comment/${postId}`)
}