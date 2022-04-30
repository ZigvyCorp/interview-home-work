import { createAsyncThunk } from "@reduxjs/toolkit";
import * as blogAPI from "./post.api";

export const getPostsThunk = createAsyncThunk(
    "/blogs/get-all",
    async (data) => {
        const response = await blogAPI.getAll(data);
        return response.data;
    }
);
