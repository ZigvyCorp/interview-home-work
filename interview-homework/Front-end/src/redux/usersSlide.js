import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  name: '',
  email: '',
  website: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
