

import { axiosInstance } from ".";

export const getPostsData = (pageIndex) => {
    return axiosInstance.get(`/api/post/?pageSize=3&pageIndex=${pageIndex}`)
}

export const getPostById = (postId) => {
    return axiosInstance.get(`/api/post/blog/${postId}`)
}

export const getPostByQueryKeyword = (keyword) => {
    return axiosInstance.get(`/api/post/search?keyword=${keyword}`)
}