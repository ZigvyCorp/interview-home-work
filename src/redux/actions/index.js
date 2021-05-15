import { createActions } from 'redux-actions'

export const getType = reduxAction => {
    return reduxAction().type
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: payload => payload,
    getPostsError: error => error
})

export const getUsers = createActions({
    getUsersRequest: undefined,
    getUsersSuccess: payload => payload,
    getUsersError: error => error
})

export const getComments = createActions({
    getCommentsRequest: undefined,
    getCommentsSuccess: payload => payload,
    getCommentsError: error => error
})
