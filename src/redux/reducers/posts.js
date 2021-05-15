import { INIT_STATE } from 'constants/index'
import { getPosts, getType } from 'redux/actions'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest): //case get posts request
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsError):
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
