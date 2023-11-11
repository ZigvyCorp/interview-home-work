import {
    CREATE_COMMENT_SUCCESS,
    GET_COMMENTS_BY_POST_SUCCESS
} from "./actionTypes";

const initialState = {
    comments: {}
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMMENT_SUCCESS:
            const key = 'post - ' + action.payload.postId;
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [key]: [
                        action.payload, ...state.comments[key]
                    ]
                }
            };
        case GET_COMMENTS_BY_POST_SUCCESS:
            const hashPostId = 'post - ' + action.payload.postId;
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [hashPostId]: action.payload.comments
                }
            };
        default:
            return state;
    }
};

export default commentReducer;