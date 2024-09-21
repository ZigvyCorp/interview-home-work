import { createSlice } from '@reduxjs/toolkit';
import * as action from './asyncAction'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        current: null,
        token: null,
        isLoading: false,
        mes: '',
    },
    reducers: {
        register: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.current = null;
        },
        clearMessage: (state) => {
            state.mes = ''
        },
    },
    extraReducers: (builder) => {
        builder.addCase(action.getCurrentUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(action.getCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.current = action.payload;
        })
        builder.addCase(action.getCurrentUser.rejected, (state) => {
            state.isLoading = false;
            state.current = null;
            state.isLoggedIn = false;
            state.token = null
            state.mes = 'Login session has expired. Please Login Again !!!'
        })
    }
});

export const { register, logout, clearMessage } = userSlice.actions;

export default userSlice.reducer;