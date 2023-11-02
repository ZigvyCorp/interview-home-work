import actionTypes from '../actions/actionTypes';
const initialState = {
    comments: [],
    loading: false,
    error: null,
};
const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_COMMENT_SUCCESS:

            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        case actionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentsReducer;