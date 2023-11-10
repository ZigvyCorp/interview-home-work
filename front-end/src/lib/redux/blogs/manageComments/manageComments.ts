// Utilities
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

// Interface
import { ManageComment } from './interface.ts'

// APIs
import { getCommentsByPost } from "utils/http.ts"

export const getPostComments = createAsyncThunk('comments/getPostComments', async (params: number, thunkApi) => {
  const response = await getCommentsByPost(params)

  return response
})

const initialState: ManageComment = {
  postsComment: {}
}

export const manageComments = createSlice({
  name: 'comments',
  initialState,

  reducers: {
    setComments:  (state, action) => {
      state.postsComment = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPostComments.fulfilled, (state, action) => {
        const postId = action.meta.arg || 0

        state.postsComment[postId] = action.payload
      })
  },
})
