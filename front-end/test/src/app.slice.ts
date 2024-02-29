import { createSlice } from '@reduxjs/toolkit'

interface Status {
  status: number
  loading: number
}

const initialState: Status = {
  status: 200,
  loading: 0
}


const app = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = state.loading + 1
        }
      )
      .addMatcher(
        action =>
          action.type.endsWith('/fulfilled') ||
          action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = action.payload.status
          state.loading = state.loading - 1
        }
      )
  }
})

const appReducer = app.reducer
export default appReducer
