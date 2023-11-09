import { Types } from "./types";

const initialState = {
    posts: [],
    filteredPosts: [],
    postsPerPage: 10,
    currentPage: 1,
    titleQuery: ''
};

const reducer = (state = initialState, action) => {
    // console.log("state in reducer: ", state, ", action: ", action)
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
        default:
            return state;
    }
};

export default reducer;