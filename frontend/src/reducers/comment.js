import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../constants/type";

function listCommentReducer (state = { comments: []}, action){
    switch(action.type){
        case COMMENT_LIST_REQUEST:
            return {loadingComments: true, comments:[]};
        case  COMMENT_LIST_SUCCESS:
            return { loadingComments : false , comments: action.payload};
        case COMMENT_LIST_FAIL:
            return { loadingComments : false, error: action.payload}
        default:
            return state;
    }
}
export {listCommentReducer}