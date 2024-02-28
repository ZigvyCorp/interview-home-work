import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserList(state) {
            return state;
        },
        fetchUserListSuccess(state, action) {
            state.list = action.payload;
        },
        fetchUserListFailed(state) {
            return state;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
