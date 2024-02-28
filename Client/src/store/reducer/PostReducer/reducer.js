import { createSlice } from '@reduxjs/toolkit'
import { getListPostsWithUser, getPostDetail } from './action.js'

const initialState = {
    postListWithUser: {
        data: [],
        limit: 10,
        page: 1,
        total: 0,
        totalPage: 0,
    },
    postDetail: {},
    loadingPost: false
}
const PostReducer = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(getListPostsWithUser.pending, (state) => ({
            ...state,
            loadingPost: true,
            postListWithUser: state.postListWithUser
        }))
        addCase(getListPostsWithUser.fulfilled, (state, { payload }) =>
            ({
                ...state,
                loadingPost: false,
                postListWithUser: {
                    total: payload.data.length,
                    page: payload.page,
                    totalPage: Math.ceil(payload.data.length / 10),
                    limit: 10,
                    result: payload.data,
                    data: payload.data.slice(0, 10 * payload.page)
                },
            })
        )
        addCase(getListPostsWithUser.rejected, (state) => ({
            ...state,
            loadingPost: false,
        }))

        addCase(getPostDetail.pending, (state) => ({
            ...state,
            loadingPost: true,
            postDetail: state.postDetail
        }))
        addCase(getPostDetail.fulfilled, (state, { payload }) =>
            ({
                ...state,
                loadingPost: false,
                postDetail: payload
            })
        )
        addCase(getPostDetail.rejected, (state) => ({
            ...state,
            loadingPost: false,
        }))
    },
})

const action = PostReducer.actions

export { action }

export default PostReducer.reducer
