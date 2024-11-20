import {GET_ALL_COMMENTS_SUCCESS,
    GET_COMMENT_BY_POST_SUCCESS} from '../actions/actionCreator';

const initState = {
        commentByPost:[],
        commentList:[]
    };

const commentReducer = (state = initState,action)=>{
    switch(action.type){
        case GET_ALL_COMMENTS_SUCCESS:
            return {
                ...state,
                commentList:[...action.payload]
            };
        case GET_COMMENT_BY_POST_SUCCESS:
            return {
                ...state,
                commentByPost:[...action.payload]
            };
        default:
            return state;
    }
};

export default commentReducer;