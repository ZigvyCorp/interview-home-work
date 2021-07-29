import * as types from '../constants/ActionTypes'


export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const fetchAllPosts = (data) => {
    return {
        type: types.FETCH_ALL_POSTS,
        data: data
    }
}

export const fetchAllUsers = (data) => {
    return {
        type: types.FETCH_ALL_USERS,
        data: data
    }
}

export const fetchAllComments = (data) => {
    return {
        type: types.FETCH_ALL_COMMENTS,
        data: data
    }
}
export const addPosts = (data) => {
    return {
        type: types.ADD_POSTS,
        data: data
    }
}