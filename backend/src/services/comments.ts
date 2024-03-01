import { TApiResponse, axiosInstance } from "../axios"
import { TComments } from "../types"

const getComments = async (
    postId: string
): Promise<TApiResponse<TComments[]>> => {
    const { data } = await axiosInstance.get('/comments', {
        params: {
            postId
        }
    })
    return data
}

const commentsService = {
    getComments
}

export default commentsService