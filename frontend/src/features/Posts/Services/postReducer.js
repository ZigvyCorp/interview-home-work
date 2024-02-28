import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './postAction';
// Định nghĩa reducer cho posts
const initialPostsState = {
    loading: false,
    data: [],
    error: null,
};

const postsReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};



export default postsReducer;