import { User } from '../../types';
import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchPostsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess(state, action: PayloadAction<User[]>) {
            state.loading = false;
            state.users = action.payload;
        },
        fetchPostsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = usersSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export default usersSlice.reducer;
