import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions/postActions';

const initialState = {
    posts: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    totalPosts: 0,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, loading: true, error: null };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.posts,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages,
                totalPosts: action.payload.totalPosts,
            };
        case FETCH_POSTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default postReducer;
