import { FETCH_POSTS_SAGA } from './actionTypes'

export const fetchPost = (search = '') => ({
    type: FETCH_POSTS_SAGA,
    payload: {
        search,
    },
})
