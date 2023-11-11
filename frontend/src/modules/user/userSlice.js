import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  userData: {}
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, actionPayload) => {
        state.users = actionPayload.payload;
    },
    getUsers: (state, actionPayload) => {
    },
    postUser: (state, actionPayload) => {
    }
  },
  
});

export const { setUsers, getUsers, postUser } = userSlice.actions;


export default userSlice.reducer;
