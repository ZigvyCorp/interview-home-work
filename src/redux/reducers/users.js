import { INIT_STATE } from 'constants/index'
import { getUsers, getType } from 'redux/actions'

export default function postsReducers(state = INIT_STATE.users, action) {
    switch (action.type) {
        case getType(getUsers.getUsersRequest): //case get posts request
            return {
                ...state,
                isLoading: true
            }
        case getType(getUsers.getUsersSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getUsers.getUsersError):
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
