import * as types from './actionTypes';

export const registerUserAction = (user) => {
    return {
        type: types.REGISTER_USER,
        user
    }
};

export const loginUserAction = (user) => {
    return {
        type: types.LOGIN_USER,
        user
    }
};

let PostId = 1

export const addPost = text => ({
    type: types.ADD_POST,
    id: PostId++,
    text
})

export const deletePost = (id) => ({
    type: types.REMOVE_POST,
    id: id
})

export const togglePost = (id) => ({
    type: types.TOGGLE_POST,
    id: id
})

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})