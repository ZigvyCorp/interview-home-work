import { RootState } from "../store/configStore";
import { PostListStatusType, } from "types/postType";
import {
    GET_POSTS,
    GET_POSTS_FAILURE,
    GET_POSTS_SEARCHED_FAILURE,
    GET_POSTS_SEARCHED_SUCCESS,
    GET_POSTS_SUCCESS,
    LOAD_MORE_POSTS,
} from "constants/actionRedux";
import {
    PostListAction,
    getPostsListSucces,
} from "../actions/postListActions";

const initialState: PostListStatusType = {
    posts: [],
    loading: false,
    totalPages: 0,
    currentPage: 0
};

const postReducer = (state = initialState, action: PostListAction) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
            };
        case GET_POSTS_SUCCESS:
            const successAction = action as ReturnType<typeof getPostsListSucces>;
            return {
                ...state,
                currentPage: successAction.payload.currentPage,
                totalPages: successAction.payload.totalPages,
                posts:
                    successAction.payload.currentPage === 1 && successAction.payload.posts
                        ? successAction.payload.posts
                        :
                        [...state.posts, ...successAction.payload.posts],
                loading: false,
            };
        case GET_POSTS_SEARCHED_SUCCESS:
            const successSearchAction = action as ReturnType<typeof getPostsListSucces>;
            return {
                ...state,
                currentPage: successSearchAction.payload.currentPage,
                totalPages: successSearchAction.payload.totalPages,
                posts: [...successSearchAction.payload.posts],
                loading: false,
            };
        case LOAD_MORE_POSTS:
            return {
                ...state,
                isLoadMore: true,
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_POSTS_SEARCHED_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export const selectPostList = (state: RootState) => state.postList.posts;
export const selectPostListLoading = (state: RootState) => state.postList.loading;
export const selectCurrentPage = (state: RootState) => state.postList.currentPage;
export const selectTotalPages = (state: RootState) => state.postList.totalPages;

export default postReducer;
