// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\slices\userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        name: '',
        loading: false,
        error: null
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.name = action.payload.name;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.name = '';
        }
    }
});

export const {loginRequest, loginSuccess, loginFailure, logout} = userSlice.actions;
export default userSlice.reducer;
