import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from '../../Comments/Services/commentAction';
// Định nghĩa reducer cho posts
const initialPostsState = {
    loading: false,
    data: [],
    error: null,
    hasNextPage: true
};


const cmtPostDetailReducer = (state = initialPostsState, action) => {

    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_COMMENTS_SUCCESS:
            let data = state.data;
            const nextPage = action.payload.comments.length > 0
            if (action.payload.page && action.payload.page > 1) {
                data = [
                    ...state.data,
                    ...action.payload.comments
                ]
            }
            else {
                data = action.payload.comments;
            }
            return {
                ...state,
                loading: false,
                data: data,
                hasNextPage: nextPage

            }
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};



export default cmtPostDetailReducer;