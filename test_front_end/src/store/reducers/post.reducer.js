import {FETCH_POST_BEGIN, FETCH_POST_FAILED, FETCH_POST_SUCCESS} from '../actions/post.actions'

const PostReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return{
                ...state,
                list: action.result
            };
        case FETCH_POST_FAILED:
            return{
                ...state,
                list: []
            };
        case FETCH_POST_BEGIN:
            return {
                ...state,
                list: []
            }
        default: return state;
    }
}

export default PostReducer;