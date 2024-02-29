import { FETCH_POST_BY_ID_REQUEST, FETCH_POST_BY_ID_SUCCESS, FETCH_POST_BY_ID_FAILURE } from './postAction';
// Định nghĩa reducer cho posts
const initialPostsState = {
    loading: false,
    data: [],
    error: null
};

const postDetailReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case FETCH_POST_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_POST_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_POST_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};



export default postDetailReducer;