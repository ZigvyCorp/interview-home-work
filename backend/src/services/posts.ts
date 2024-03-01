import { TApiResponse, axiosInstance } from "../axios"
import { TPost } from "../types"
import usersService from "./users"

const getPosts = async (
    start: string,
    limit: string // example both client and server have limit = 10
): Promise<TApiResponse<TPost[]>> => {
    // get posts by page
    const { data } = await axiosInstance.get('/posts', {
        params: {
            _start: start,
            _limit: limit
        }
    })
    // this back-end app does not implement relation database, only use mock api
    // so i do this instead to response posts list with user name despite this is bad practice
    const posts = (data as TApiResponse<TPost[]>).data
    const userId = posts?.[0].id
    const { data: user } = await usersService.getUser(userId || '')

    if (posts && user) {
        // traditional loop reduce cost
        for (let i = 0; i < posts.length; i++) {
            posts[i].author = user.name
        }
    }

    return data
}

const getPostById = async (
    id: string
): Promise<TApiResponse<TPost>> => {
    const { data } = await axiosInstance.get(`/posts/${id}`)

    const post = (data as TApiResponse<TPost>).data
    const userId = post?.id
    const { data: user } = await usersService.getUser(userId || '')
    if (post && user) {
        post.author = user.name
    }

    return data
}

const postsService = {
    getPosts,
    getPostById
}

export default postsService