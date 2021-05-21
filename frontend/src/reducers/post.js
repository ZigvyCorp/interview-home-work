import { POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from "../constants/type";

function listPostReducer (state = { posts: []}, action){
    switch(action.type){
        case POST_LIST_REQUEST:
            return {loading: true, posts:[]};
        case  POST_LIST_SUCCESS:
            return { loading : false , posts: action.payload};
        case POST_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
export {listPostReducer}