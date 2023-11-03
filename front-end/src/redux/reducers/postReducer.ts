import { PayloadAction } from "../../interfaces/BaseReduxAction";
import { PaginationResponse } from "../../interfaces/response/PaginationResponse";
import { PostResponse } from "../../interfaces/response/PostResponse";
import { GET_POSTS } from "../actions/postAction";

export interface PostInitialState {
    posts: PostResponse[];
    count: number;
}

export const initialState: PostInitialState = {
    posts: [],
    count: 0
  };


const postReducer =  (state = initialState, actions: PayloadAction<PaginationResponse<PostResponse>>) => {
    switch(actions.type){
        case GET_POSTS: {
            state.posts = actions.payload.rows;
            state.count = actions.payload.count
            return {...state, requesting: true};
        }
        default:        
            return state;
    }
}

export {postReducer}