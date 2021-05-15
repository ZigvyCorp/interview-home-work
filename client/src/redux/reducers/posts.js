import { INIT_STATE } from '../../constant';
import { getPosts, getType, searchPosts } from '../actions/post';

export default function postsReducers(state= INIT_STATE.posts,action){
    switch(action.type){
        case getType(getPosts.getPostsRequest):
            return{
                ...state,
                isLoading:true,
            }
        case getType(getPosts.getPostsSuccess):
            return{
                ...state,
                isLoading:false,
                data: action.payload,
            }
        case getType(getPosts.getPostsFailure):
            return{
                ...state,
                isLoading:false,
            }  
        case getType(searchPosts.searchPostsSuccess):
            return{
                ...state,
                data:action.payload,
            }  
        default:
            return state;
    }

    
}