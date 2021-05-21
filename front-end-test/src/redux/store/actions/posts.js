import * as actionTypes from './actionTypes'

export const getPosts = () => {
    return {
        type: actionTypes.GET_POSTS
    }
}

export const setPosts = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        posts
    }
}


export const getComments = (postId) => {
    return {
        type: actionTypes.GET_COMMENTS,
        postId
    }
}

export const setComments = (postId, comments) => {
    return {
        type: actionTypes.SET_COMMENTS,
        postId,
        comments
    }
}


export const getAuthor = (postId, userId) => {
    return {
        type: actionTypes.GET_AUTHOR,
        postId,
        userId
    }
}

export const setAuthor = (postId, user) => {
    return {
        type: actionTypes.SET_AUTHOR,
        postId,
        user
    }
}