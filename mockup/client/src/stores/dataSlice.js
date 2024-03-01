import { createSlice } from "@reduxjs/toolkit"
import { fetchInitialData } from "./asyncActions"

const initialState = {
    postList: [],
    searchPostList: null,
    loading: true
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

        loadMorePost: (state, action) => {

            state.postList = [...state.postList, ...action.payload]
        },

        searchPost: (state, action) => {

            state.searchPostList = action.payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchInitialData.pending, (state) => {

            state.loading = true
        })

        builder.addCase(fetchInitialData.fulfilled, (state, action) => {

            state.loading = false
            state.postList = action.payload
        })

        builder.addCase(fetchInitialData.rejected, (state) => {

            state.loading = false
        })
    }
})

export const { loadMorePost, searchPost } = dataSlice.actions

export default dataSlice.reducer
