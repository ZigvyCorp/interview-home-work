
import { INIT_STATE } from "../../constant";
import { createPost, getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.posts,action){
 switch(action.type){
     case getType(getPosts.getPostsRequest) :
     return{
         ...state,
         isLoading:true,
     };
     case getType(getPosts.getPostSuccess) :
        return{
            ...state,
            isLoading:false,
            data: action.payload
        };
        case getType(getPosts.getPostFailure ) :
            return{
                ...state,
                isLoading:false,
               
            };
         
     default:
     return state;
 }
}