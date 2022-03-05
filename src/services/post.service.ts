import { AxiosResponse } from "axios"
import { CommentModel } from "../models/comment"
import { getAsync } from "../utils/http-client"
import { PostModel } from "./../models/post"

const URL_PATH = "https://jsonplaceholder.typicode.com"
export const getListPostsAsync = (): Promise<AxiosResponse<PostModel[]>> => {
	let url = `${URL_PATH}/posts`
	return getAsync(url)
}

export const getListCommentsAsync = (postId: number): Promise<AxiosResponse<CommentModel[]>> => {
	let url = `${URL_PATH}/posts/${postId}/comments`
	return getAsync(url)
}
