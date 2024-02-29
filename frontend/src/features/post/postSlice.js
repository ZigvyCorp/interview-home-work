import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPost() {},
        setPost(state, action) {
            return { ...state, post: action.payload };
        },
    },
});

const { actions, reducer } = postSlice;
const { getPost, setPost } = actions;

export { getPost, setPost };
export default reducer;
