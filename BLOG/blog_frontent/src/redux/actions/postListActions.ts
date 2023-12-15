import { PostListState } from "types/postType";
import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, LOAD_MORE_POSTS, GET_POSTS_SEARCHED, GET_POSTS_SEARCHED_SUCCESS} from "constants/actionRedux";

export const getPosts = ({ page, search }: { page: number, search: string }) => ({
    type: GET_POSTS,
    payload: {
        page,
        search
    }
})

export const getPostsSearch = ({ page, search }: { page: number, search: string }) => ({
    type: GET_POSTS_SEARCHED,
    payload: {
        page,
        search
    }
})

export const getPostsListSucces = (posts: PostListState) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
})

export const getPostsListFailure = () => ({
    type: GET_POSTS_FAILURE
})

export const getPostsListSearchSucces = (posts: PostListState) => ({
    type: GET_POSTS_SEARCHED_SUCCESS,
    payload: posts
})

export const getPostsListSearchFailure = () => ({
    type: GET_POSTS_SEARCHED_SUCCESS,
})

export const loadMorePostsList = () => ({
    type: LOAD_MORE_POSTS,
})

export type PostListAction =
    | ReturnType<typeof getPosts>
    | ReturnType<typeof getPostsListSucces>
    | ReturnType<typeof getPostsListFailure>
    | ReturnType<typeof loadMorePostsList>
    | ReturnType<typeof getPostsListSearchSucces>
    | ReturnType<typeof getPostsListSearchFailure> 


