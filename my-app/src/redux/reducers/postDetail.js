import * as Types from "../action/actionType"

const initialState = {
    postDetail: undefined,
    commentPost: undefined
}

const postDetail = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_POST_DETAIL_SUCCESS:
            return {postDetail: action.postDetail, commentPost: action.commentPost};
            break;
        case Types.FETCH_POST_DETAIL_ERROR:
            return {postDetail: null,
                    commentPost: null};
            break;
        default:
            return state;
    }
}

export default postDetail