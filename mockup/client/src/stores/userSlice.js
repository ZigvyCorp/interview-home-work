import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    user: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login: (state, action) => {

        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer
