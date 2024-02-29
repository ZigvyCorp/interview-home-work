import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  perPage: 5
}

export const page = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    }
  }
})

export const { setPage } = page.actions

export default page.reducer
