import { createAsyncThunk, createAction,createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface PostState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
  value: 0,
  status: 'idle',
};


export const postSlice = createSlice({
  name: 'post',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = postSlice.actions;

export default postSlice.reducer;
