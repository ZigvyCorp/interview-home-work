import { CreatePost, FetchPost, PostResponse } from "../../types/Post/types";
import { CREATE_POST, CREATE_POST_FAILURE, CREATE_POST_SUCCESS, GET_POSTS, GET_POST_FAILURE, GET_POST_SUCCESS, INCREASE_COMMENT, LOAD_MORE_POST } from "./actions";


export const getPosts = ({page, search}: {page: number, search: string}) => ({
    type: GET_POSTS,
    payload: {
        page,
        search
    }
})

export const getPostSucces = (posts: FetchPost) => ({
    type: GET_POST_SUCCESS,
    payload: posts
})

export const getPostFailure = () => ({
    type: GET_POST_FAILURE
})

export const createPost = (body: CreatePost) => ({
    type: CREATE_POST,
    payload: body
})

export const createPostSuccess = (post: PostResponse) => ({
    type: CREATE_POST_SUCCESS,
    payload: post
})

export const createPostFailure = () => ({
    type: CREATE_POST_FAILURE,
})

export const increaseComment = (postId: number) => ({
    type: INCREASE_COMMENT,
    payload: postId
})

export const loadMorePost = () => ({
    type: LOAD_MORE_POST,
})


export type PostAction =
  | ReturnType<typeof getPosts>
  | ReturnType<typeof getPostSucces>
  | ReturnType<typeof getPostFailure>
  | ReturnType<typeof createPost>
  | ReturnType<typeof createPostSuccess>
  | ReturnType<typeof createPostFailure>
  | ReturnType<typeof loadMorePost>

