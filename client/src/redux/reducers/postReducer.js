import { createSlice } from '@reduxjs/toolkit'

export const postReducer = createSlice({
    name: 'postReducer',
    initialState: {
        post: [],
        postDetail: {},
        isLoading: false
    },
    reducers: {
        // List Post State
        getPost: (state) => {
            state.isLoading = true
        },
        getPostSuccess: (state, action) => {
            state.post = action.payload
            state.isLoading = false
        },
        getPostFailure: (state, action) => {
            state.post = action.payload
            state.isLoading = false
        },

        // Post Detail State
        getPostDetail: (state) => {
            state.isLoading = true
        },
        getPostDetailSuccess: (state, action) => {
            state.postDetail = action.payload
            state.isLoading = false
        },
        getPostDetailFailure: (state, action) => {
            state.postDetail = action.payload
            state.isLoading = false
        }
    }
})

export const {
    getPost,
    getPostSuccess,
    getPostFailure,
    getPostDetail,
    getPostDetailSuccess,
    getPostDetailFailure
} = postReducer.actions
export default postReducer.reducer;