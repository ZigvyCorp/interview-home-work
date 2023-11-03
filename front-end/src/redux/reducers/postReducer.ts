import { PayloadAction } from "../../interfaces/BaseReduxAction";
import { PostResponse } from "../../interfaces/response/PostResponse";

interface State {
    posts: PostResponse[]
}

export const initialState: State = {
    posts: []
  };


const postReducer =  (state = initialState, actions: PayloadAction<PostResponse[]>) => {
    switch(actions.type){
        case "LOGIN_PAGE_INIT":
        return {...state, errors:{}};
        case "GET_ALL_POST": {
            state.posts = actions.payload;
            return {...state, requesting: true};
        }
        case "LOGIN_SUCCESS":
            return {...state, successful: true, user:{...actions.payload}};
        case "LOGIN_ERROR":
            return {...state, successful: false, errors:{...actions.error}};
        default:        
            return state;
    }
}

export {postReducer}