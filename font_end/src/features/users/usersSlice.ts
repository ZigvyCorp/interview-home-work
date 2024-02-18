import { EntityId, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface User {
    ids: EntityId;
    id: string;
    username: string;
}

const usersAdapter = createEntityAdapter<User>();

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({ status: 'idle', error: null }),
    reducers: {
        getUsersSucces: (state, action) => {
            usersAdapter.upsertMany(state, action.payload.users);
            state.status = 'idle';
        },
        getUsersPending: (state) => {
            state.status = 'pending';
        },
        getUsersError: (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
        },
    },
});

export const { getUsersError, getUsersPending, getUsersSucces } =
    usersSlice.actions;
export const { selectById: selectUserById } = usersAdapter.getSelectors(
    (state: RootState) => state.users
);
export default usersSlice.reducer;
