import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser() {},
        setUser(state, action) {
            return { ...state, user: action.payload };
        },
    },
});

const { actions, reducer } = userSlice;
const { getUser, setUser } = actions;

export { getUser, setUser };
export default reducer;
