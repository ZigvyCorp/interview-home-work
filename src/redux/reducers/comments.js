import { INIT_STATE } from 'constants/index'
import { getComments, getType } from 'redux/actions'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getComments.getCommentsRequest): //case get posts request
            return {
                ...state,
                isLoading: true
            }
        case getType(getComments.getCommentsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getComments.getCommentsError):
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
