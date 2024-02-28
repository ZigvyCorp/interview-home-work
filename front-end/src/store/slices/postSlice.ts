import { Post } from '../../types';
import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface PostsState {
    posts: Post[];
    keyword: string;
    loading: boolean;
    error: string | null;
    page: number;
    hasMore: boolean;
}

const initialState: PostsState = {
    posts: [],
    keyword: '',
    loading: false,
    error: null,
    page: 1,
    hasMore: true
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPostsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
            state.loading = false;
            state.posts = action.payload;
            state.hasMore = action.payload.length === 10;
        },
        fetchPostsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        loadMorePostsStart(state) {
            state.loading = true;
        },
        loadMorePostsSuccess(state, action: PayloadAction<Post[]>) {
            state.loading = false;
            state.posts = [...state.posts, ...action.payload];
            state.page++;
            state.hasMore = action.payload.length > 0;
        },
        searchPostsStart(state, action: PayloadAction<string>) {
            state.loading = true;
            state.keyword = action.payload;
            state.hasMore = true;
            state.page = 1;
        }
    }
});

export const {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure,
    loadMorePostsStart,
    loadMorePostsSuccess,
    searchPostsStart
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
