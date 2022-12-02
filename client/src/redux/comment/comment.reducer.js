import CommentActionTypes from './comment.types';

const INITIAL_STATE = {
    comment: null,
    isFetching: false,
    errorMessage: undefined,
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENTS_START:
            return {
                ...state,
                isFetching: true,
            };
        case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            };
        case CommentActionTypes.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default commentReducer;
