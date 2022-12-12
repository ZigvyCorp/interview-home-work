import {createSlice} from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts', initialState: {
        isLoading: false, data: []
    }, reducers: {
        getPostsRequest: (state) => {
            state.isLoading = true
        }, getPostsSuccess: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        }, getPostsFailed: (state, action) => {
            state.isLoading = false
            state.data = []
        }, searchPostByTitle: (state, action) => {
            state.isLoading = false
            state.data = state.data.filter((item) => {
                console.log(item)
                return item.title.toLowerCase().includes(action.payload.toLowerCase())
            })
        }
    }
})

export const {getPostsRequest, getPostsSuccess, getPostsFailed,searchPostByTitle} = postsSlice.actions

export default postsSlice.reducer