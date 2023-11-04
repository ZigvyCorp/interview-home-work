import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: { value: [] },
    reducers: {
        get_author: (state, action) => {
            state.value = action.payload
        }
    }
})

export const state = (state) => state.user.value
export default UserSlice.reducer