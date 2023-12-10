import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../util/api";

interface InitialState {
    loadingUser: boolean;
    detailUser: {
        _id: string,
        name: string,
        email: string,
        phone: string,
        avatarUrl: string,
    }
    error?: string;
}

const initialState: InitialState = {
    loadingUser: false,
    detailUser: {
        _id: "",
        name: "",
        email: "",
        phone: "",
        avatarUrl: "",
    },
    error: "",
};

export const loginUser = createAsyncThunk(
    '/login',
    async (payload: { email: string; password: string }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await api.post(`/user/login`, {...payload});
            return response.data;
        } catch (error: any) {
            const errorObj = JSON.parse(error.request.response);
            return rejectWithValue(errorObj);
        }
    },
);

export const register = createAsyncThunk(
    "/register",
    async (data: { email: string, password: string, phone: string, name: string }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await api.post(`/user/register`, { ...data });
            return response.data;
        } catch (error: any) {
            const errorObj = JSON.parse(error.request.response);
            return rejectWithValue(errorObj);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoadingUser: (state, action: PayloadAction<boolean>) => {
            state.loadingUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loadingUser = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.detailUser = action.payload.user;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('refreshToken', action.payload.token);
            })
            .addCase(loginUser.rejected, (state) => {
                state.loadingUser = false;
            })
            .addCase(register.pending, (state) => {
                state.loadingUser = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loadingUser = false;
            })
            .addCase(register.rejected, (state) => {
                state.loadingUser = false;
            });
    },
});
export const { setLoadingUser } = userSlice.actions;
export default userSlice.reducer;
