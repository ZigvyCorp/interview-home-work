import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
}
const UsersReducer = createSlice({
  name: 'UsersReducer',
  initialState,
  reducers: {
    getListUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const {getListUsers} = UsersReducer.actions
export default UsersReducer.reducer