import { TApiResponse, TGetCommentsRequest } from "types/api"
import { axiosInstance } from "./axios"
import { AxiosResponse } from "axios"
import { TComments } from "types/comments"

export const getComments = (
    request: TGetCommentsRequest
): Promise<AxiosResponse<TApiResponse<TComments[]>>> => {
    const { postId } = request
    return axiosInstance.get('/comments', {
        params: {
            postId
        }
    })
}