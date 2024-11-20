import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'userReducer',
    initialState: {
        user: [],
        isLoading: false
    },
    reducers: {
        getUser: (state) => {
            state.isLoading = true
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload
            state.isLoading = false
        },
        getUserFailure: (state, action) => {
            state.user = action.payload
            state.isLoading = false
        }
    }
})

export const { getUser, getUserSuccess, getUserFailure } = userReducer.actions
export default userReducer.reducer;