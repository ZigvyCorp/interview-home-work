import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../type';

interface PostState {
    posts: IPost[];
    currentPage: number;
}

const initialState: PostState = {
    posts: [],
    currentPage: 1,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPost(state, action: PayloadAction<IPost[]>) {
            state.posts = [...action.payload]
        },
        getNextPost(state, action: PayloadAction<IPost[]>) {
            state.posts = [...state.posts, ...action.payload]
            state.currentPage += 1;
        },
        createPost(state, action: PayloadAction<IPost>) {
            state.posts = [...state.posts, action.payload]
        }
    },
});

export const { getPost, getNextPost, createPost } = postSlice.actions;
export default postSlice.reducer;