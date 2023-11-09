import axiosInstance from "./axiosInstance";

export function getComments(postId, skip = 0) {
    return axiosInstance.get(`posts/${postId}/comments`, {
        params: {
            skip
        }
    }).then((res => {
        return res.data
    })).catch(err => {
        console.log(err)
    })
}