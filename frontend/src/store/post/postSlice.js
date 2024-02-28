import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import getDefaultPaging from "../../utils/getDefaultPaging";

const initialState = {
    isLoading: false,
    postList: getDefaultPaging(),
    postsSearch: getDefaultPaging(),
    post: null
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchPostList(state) {
            state.isLoading = true;
        },
        fetchPostListSuccess(state, action) {
            state.isLoading = false;
            state.postList = {
                ...state.postList,
                list: action.payload.page === 1
                    ? action.payload.posts
                    : [
                        ...state.postList.list,
                        ...action.payload.posts
                    ],
                page: action.payload.page,
                limit: action.payload.limit,
                totalItems: action.payload.totalItems,
                totalPages: action.payload.totalPages

            };
        },
        fetchPostListFailure(state) {
            state.isLoading = false;
        },
        searchPosts(state) {
            state.isLoading = true;
        },
        searchPostsSuccess(state, action) {
            state.isLoading = false;
            state.postsSearch = {
                ...state.postsSearch,
                list: action.payload.page === 1
                    ? action.payload.posts
                    : [
                        ...state.postsSearch.list,
                        ...action.payload.posts
                    ],
                page: action.payload.page,
                limit: action.payload.limit,
                totalItems: action.payload.totalItems,
                totalPages: action.payload.totalPages

            };
        },
        searchPostsFailed(state) {
            state.isLoading = false;
        },
        fetchPost(state) {
            state.isLoading = true;
        },
        fetchPostSuccess(state, action) {
            state.isLoading = false;
            state.post = action.payload;
        },
        fetchPostFailed(state) {
            state.isLoading = false;
            state.post = null;
        }
    }
});

export const postActions = postSlice.actions;

const persistConfig = {
    key: 'posts',
    storage,
    whitelist: ['postList']
};

export default persistReducer(persistConfig, postSlice.reducer);