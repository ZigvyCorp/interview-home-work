// import { createSlice } from '@reduxjs/toolkit';

import { GET_LIST_POST, GET_LIST_POST_SUCCESS } from "./postConstant";

// export const postSlice = createSlice({
//     name: 'post',
//     initialState: {
//         allPost: [],
//     },
//     reducers: {
//         setPostList: (state, action) => {
//             state.allPost = action.payload;
//         },

//     },
// });
// export const { setPostList } = postSlice.actions;

// export default postSlice.reducer;

const INITIAL_STATE={
    post:[],
    load:false,
}

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST_POST:
            return {
                ...state,
                load: true,
            };
        case GET_LIST_POST_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                posts: data,
                load: false,
            };
        default:
            return state;
    }
};

export default postsReducer;
