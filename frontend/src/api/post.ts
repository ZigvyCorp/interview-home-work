import { TApiResponse, TGetPostsRequest } from "types/api"
import { axiosInstance } from "./axios"
import { TPost } from "types/post"
import { AxiosResponse } from "axios"

export const getPosts = (
    request: TGetPostsRequest
): Promise<AxiosResponse<TApiResponse<TPost[]>>> => {
    const { start, limit } = request
    return axiosInstance.get('/posts', {
        params: {
            start,
            limit
        }
    })
}

export const getPostById = async (
    id: string
): Promise<TApiResponse<TPost>> => {
    const { data } = await axiosInstance.get(`/posts/${id}`)
    return data
}