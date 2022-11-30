import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUserList(state) {
            state.loading = true;
        },
        fetchUserListSuccess(state, action) {
            state.loading = false;
            state.list = action.payload;
        },
        fetchUserListFailed(state, action) {
            state.loading = false;
        },
    },
});
export const userActions = userSlice.actions;
//Selections
export const selectUserList = (state) => state.user.list;
//Reducer
const userReducer = userSlice.reducer;
export default userReducer;
