import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { I_Post } from '../model/postInterface';
import { postAPI } from '../services/api';

type Props = {
    listPost: I_Post[] | null,
    searchPosts: I_Post[] | null,
    status: boolean
}

const initialState: Props = {
    listPost: null,
    searchPosts: null,
    status: false
}

export const getSearchPost = createAsyncThunk("searchPost",
    async (data: string, { dispatch }) => {
        try {
            let res = await postAPI.searchPost(data);
            if (data !== "") {
                dispatch(setSearchPosts(res.data.content))
                return res.data.content
            }
        } catch (error: any) {
            throw new Error(error)
        }
    })

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setListPost: (state, { payload }) => {
            state.listPost = payload
        },
        setSearchPosts: (state, { payload }) => {
            state.searchPosts = payload
            state.status = true
        }
    }
});

export const { setListPost, setSearchPosts } = postSlice.actions

export default postSlice.reducer