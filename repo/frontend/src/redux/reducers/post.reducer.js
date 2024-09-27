import postTypes from "../types/post.types";

const initialState = {
    posts: [],
    post: {},
    totalItems: 0,
};

const postReducer =  (state = initialState, action) => {
    switch (action.type) {
        case postTypes.FETCH_POSTS_SUCCESS:
            return { ...state, posts: action.payload.data, totalItems: action.payload.totalItems };
        case postTypes.FETCH_POST_SUCCESS:
            return { ...state, post: action.payload.data }
        default:
            return state;
    }
};

export default postReducer;