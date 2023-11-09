import { createSlice } from '@reduxjs/toolkit'
import * as actions from "../AsyncAction/user"

const initialState = {
    isLoggedIn: false,
    currentUser: null,
    accessToken: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { isLoggedIn, accessToken } = action.payload

            state.isLoggedIn = isLoggedIn
            state.accessToken = accessToken
        },
        logout: (state, action) => {

            state.isLoggedIn = false
            state.accessToken = null
            state.currentUser = null

        },
    },
    // Code logic xử lý async action
    extraReducers: (builder) => {
        builder.addCase(actions.getCurrentUser.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        builder.addCase(actions.getCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
            state.isLoggedIn = true;

        });

        builder.addCase(actions.getCurrentUser.rejected, (state, action) => {
            state.isLoading = false;
            // state.currentUser = null;
            // state.isLoggedIn = false;
            // state.accessToken = null;
        });
    },
});

export const { login, logout } = userSlice.actions

export default userSlice.reducer