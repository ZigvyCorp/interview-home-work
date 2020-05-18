import {LOAD_POSTS, CREATE_POST} from '../action/actionType';

const initialState = {
    posts : [],
    post: {}
}


const  postReducer = (state = initialState, action)=>{
    switch(action.type){
        case LOAD_POSTS : {
            const  listPost = action.payload.posts;
            return {
                ...state,
                posts: listPost
            }
        }
        case CREATE_POST : {
            const  post = action.payload.post;
            return {
                ...state,
                post: post
            }
        }
        default:
            return state;
    }
}

export default postReducer;