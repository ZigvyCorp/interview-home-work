import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './commentAction';
// Định nghĩa reducer cho posts
const initialPostsState = {
};

const commentsReducer = (state = initialPostsState, action) => {
    if (!action?.payload?.postId) return {};

    const postId = action?.payload?.postId;
    let myState = state;
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            myState[postId] = {
                ...myState[postId],
                loading: true,
                error: null,
            }
            return myState;

        case FETCH_COMMENTS_SUCCESS:
            let data = [];
            const nextPage = action.payload.comments.length > 0
            if (action.payload.page && action.payload.page > 1) {
                data = [
                    ...myState[postId].data,
                    ...action.payload.comments
                ]
            }
            else {
                data = action.payload.comments;
            }

            myState[postId] = {
                ...myState[postId],
                loading: false,
                data: data,
                hasNextPage: nextPage

            }
            console.log(myState[postId]);
            return {
                ...myState
            };
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



export default commentsReducer;