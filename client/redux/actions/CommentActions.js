import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAIL } from './ActionsType';

// Export Actions
export const getCommentsRequest= () => ({
    type: GET_COMMENTS_REQUEST,
})

export const getCommentsSuccess= (payload) => ({
    type: GET_COMMENTS_SUCCESS,
    payload
})

export const getCommentsFail= () => ({
    type: GET_COMMENTS_FAIL,
})
