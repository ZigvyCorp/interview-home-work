import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        on_loading: (state, action) => {
            state.loading = true
        },
        off_loading: (state, action) => {
            state.loading = false
        },
    }
});

export const { on_loading, off_loading } = loadingSlice.actions

export default loadingSlice.reducer