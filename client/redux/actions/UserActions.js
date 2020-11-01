import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from './ActionsType';

// Export Actions
export const getUsersRequest= () => ({
    type: GET_USERS_REQUEST,
})

export const getUsersSuccess= (payload) => ({
    type: GET_USERS_SUCCESS,
    payload
})

export const getUsersFail= () => ({
    type: GET_USERS_FAIL,
})
