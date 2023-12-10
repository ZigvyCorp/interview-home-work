import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../util/api";
import { comment } from "./commentSlice";

export interface blog {
    _id: string,
    content: string,
    title: string,
    comment: comment[],
    author: {
        _id: string,
        name: string,
        email: string
    },
    createdAt: string
}
interface InitialState {
    loadingBlog: boolean;
    listBlog: blog[],
    blog: {
        content: string,
        title: string,
        _id: string,
    },
    error?: string;
}

const initialState: InitialState = {
    loadingBlog: false,
    blog:{
        _id: "",
        content: "",
        title: "",
    },
    listBlog:[{
        _id: "",
        content: "",
        title: "",
        comment: [],
        author: {
            _id: "",
            name: "",
            email: "",
        },
        createdAt: "",
    }],
    error: "",
};

export const getListBlog = createAsyncThunk(
    '/blog',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await api.get(`/blog`);
            return response.data;
        } catch (error: any) {
            const errorObj = JSON.parse(error.request.response);
            return rejectWithValue(errorObj);
        }
    },
);

export const createBlog = createAsyncThunk(
    '/create',
    async (payload: { content: string, title: string }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await api.post(`/blog`, { ...payload });
            return response.data;
        } catch (error: any) {
            const errorObj = JSON.parse(error.request.response);
            return rejectWithValue(errorObj);
        }
    },
);

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setLoadingBlog: (state, action: PayloadAction<boolean>) => {
            state.loadingBlog = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
             .addCase(createBlog.pending, (state) => {
                state.loadingBlog = true;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.loadingBlog = false;
                state.blog = action.payload
            })
            .addCase(createBlog.rejected, (state) => {
                state.loadingBlog = false;
            })
            .addCase(getListBlog.pending, (state) => {
                state.loadingBlog = true;
            })
            .addCase(getListBlog.fulfilled, (state, action) => {
                state.loadingBlog = false;
                state.listBlog = action.payload
            })
            .addCase(getListBlog.rejected, (state, action) => {
                state.loadingBlog = false;
            })
           ;
    },
});
export const { setLoadingBlog } = blogSlice.actions;
export default blogSlice.reducer;