export const getPosts = () => {
    return {
        type: 'GET_POSTS_REQUEST'
    }
}

export const getUsers = () => {
    return {
        type: 'GET_USERS_REQUEST'
    }
}

export const getCmts = (id) => {
    return {
        type: 'GET_CMTS_REQUEST',
        payload: id
    }
}

export const setPostDetail = (data) => {
    return {
        type: 'setPostDetail',
        payload: data
    }
}

export const setSearchPosts = (search) => {
    return {
        type: 'setSearchPosts',
        payload: search
    }
}

export const setSearch = (text) => {
    return {
        type: 'setSearch',
        payload: text
    }
}