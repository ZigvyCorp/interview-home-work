import { Types } from "./type.jsx";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    console.log("action post", action.payload);
    switch (action.type) {
        case Types.loadPosts: {
            return {
                posts: [...state.posts, action.payload]
            }
        }
        default:
            return state
    }
}