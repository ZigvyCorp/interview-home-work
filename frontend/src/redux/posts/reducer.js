import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actions';

const initialState = {
    posts: [],
    error: null,
    loading: false,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return { ...state, posts: action.payload, loading: false };
        case FETCH_POSTS_FAILURE:
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
};

export default postsReducer;
