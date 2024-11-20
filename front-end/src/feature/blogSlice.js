import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { blogService } from "./blogService"

export const getAllPosts = createAsyncThunk(
    "blogs/get",
    async (thunkAPI) => {
        try {
            return await blogService.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getPost = createAsyncThunk(
    "blog/get",
    async (id, thunkAPI) => {
        try {
            return await blogService.getBlog(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const blogState = {
    blog: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const blogSlice = createSlice({
    name: "blog",
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.error;
        })
        .addCase(getPost.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleBlog = action.payload;
        })
        .addCase(getPost.rejected, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.error;
        })
    }
});

export default blogSlice.reducer;