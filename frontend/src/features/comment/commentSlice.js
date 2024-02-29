import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
};
const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        getComment() {},
        setComment(state, action) {
            return { ...state, comments: action.payload };
        },
    },
});

const { actions, reducer } = commentSlice;
const { getComment, setComment } = actions;
export { getComment, setComment };
export default reducer;
