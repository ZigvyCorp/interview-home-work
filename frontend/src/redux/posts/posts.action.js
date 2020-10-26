import { createAction } from "redux-actions"
import { GET_POSTS, GET_POSTS_SUCCEED, GET_COMMENTS, GET_COMMENTS_SUCCEED, GET_USERS, GET_USERS_SUCCEED, GET_POST_DETAIL, GET_POST_DETAIL_SUCCEED } from "./posts.type"

export const getPosts = createAction(
    GET_POSTS
)

export const getPostsSucceedAction = createAction(
    GET_POSTS_SUCCEED,
    res => res
)

export const getComments = createAction(
    GET_COMMENTS
)

export const getCommentsSucceedAction = createAction(
    GET_COMMENTS_SUCCEED,
    res => res
)

export const getUsers = createAction(
    GET_USERS
)

export const getUsersSucceedAction = createAction(
    GET_USERS_SUCCEED,
    res => res
)

export const getPostDetail = createAction(
    GET_POST_DETAIL,
    req => req
)

export const getPostDetailSucceedAction = createAction(
    GET_POST_DETAIL_SUCCEED,
    res => res
)