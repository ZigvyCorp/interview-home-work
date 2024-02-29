import { FETCH_POST_SEARCH_REQUEST, FETCH_POST_SEARCH_SUCCESS, FETCH_POST_SEARCH_FAILURE } from './postSearchAction';
// Định nghĩa reducer cho posts
const initialPostsState = {
    loading: false,
    data: [],
    error: null,
};

const postSearchReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case FETCH_POST_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_POST_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_POST_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};



export default postSearchReducer;