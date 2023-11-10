// Utilities
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Interface
import { Users } from "./interface.ts";

const initialState: Users = {
  users: [],
}

export const manageUsers = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },
})
