import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Comment = {
    id: number;
    email: string;
    content: string;
};

export interface Post {
    id: number;
    owner: number;
    title: string;
    content: string;
    comments: Comment[];
    createdAt: number;
}

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null
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
        },
        fetchPostsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
