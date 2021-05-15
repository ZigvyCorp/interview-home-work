import { INIT_STATE } from '../../constant';
import { getComments, getType } from '../actions/comment';

export default function postsReducers(state= INIT_STATE.comments,action){
    switch(action.type){
        case getType(getComments.getCommentsRequest):
            return{
                ...state,
                isLoading:true,
            }
        case getType(getComments.getCommentsSuccess):
            return{
                ...state,
                isLoading:false,
                data: action.payload,
            }
        case getType(getComments.getCommentsFailure):
            return{
                ...state,
                isLoading:false,
            }    
        default:
            return state;
    }

    
}