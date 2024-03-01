import actionTypes from "../actions/actionTypes";

const initState = {
    comments: [],
};

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS:
            return {
                ...state,
                comments: action.comments || [],
            };
        case actionTypes.GET_COMMENTS_BY_POST_ID:
            return {
                ...state,
                comments: action.comments || [],
            }
        default:
            return state;
    }
};

export default commentReducer;