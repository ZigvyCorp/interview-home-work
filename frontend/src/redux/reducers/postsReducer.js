import { SEARCH_POSTS, SET_POSTS } from "../constant.js";

const initialState = {
    posts: [],
};

const postsReducer = (state = initialState, { type, payload }) => { 
    switch (type) {
        case SET_POSTS:
            if (payload.posts && payload.posts.length) {
                state.posts = [...state.posts, ...payload.posts];
            } else {
                state.posts = [...state.posts, ...payload];
            }
            return { ...state };
        case SEARCH_POSTS:
            state.posts = [...payload];
            return { ...state };
        default:
            return state;
    }
}
 
export default postsReducer;