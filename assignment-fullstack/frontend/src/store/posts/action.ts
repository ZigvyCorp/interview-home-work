import { createAsyncThunk } from '@reduxjs/toolkit';
import { postsApi } from 'api/posts';

export const fetchSearchPosts = createAsyncThunk('posts/searchPosts', async (query: string) => {
    const res = await postsApi.searchPost(query);
    return res?.data;
});
