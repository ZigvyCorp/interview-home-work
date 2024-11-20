import { Types } from "./types";

const initialState = {
    posts: [],
    filteredPosts: [],
    comments: [],
    postsPerPage: 10,
    currentPage: 1,
    titleQuery: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.onNextPage:
            return {
                ...state,
                currentPage: state.currentPage++,
            };
        case Types.onPrevPage:
            return {
                ...state,
                currentPage: state.currentPage--,
            };
        case Types.onPageNumClick:
            return {
                ...state,
                currentPage: action.payload,
            };
        case Types.getPostsFetch:
            return {
                ...state,
            };
        case Types.getPostsSuccess:
            return {
                ...state,
                posts: action.posts,
                filteredPosts: action.posts,
            };
        case Types.onQuerySearch:
            return {
                ...state,
                titleQuery: action.payload.query,
                filteredPosts: action.payload.filteredPosts,
            };
        case Types.onAddCommentSuccess:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };
        case Types.onFetchComments:
            return {
                ...state,
            };
        case Types.onFetchCommentsSuccess:
            return {
                ...state,
                comments: action.comments,
            };
        default:
            return state;
    }
};

export default reducer;