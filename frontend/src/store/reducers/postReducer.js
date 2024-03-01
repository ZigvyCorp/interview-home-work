import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
    totalPages: 0,
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return {
                ...state,
                posts: action.posts || [],
                totalPages: action.totalPages || 0,
            };
        case actionTypes.GET_POSTS_BY_ID:
            return {
                ...state,
                posts: action.posts || [],
            };
        default:
            return state;
    }
};

export default postReducer