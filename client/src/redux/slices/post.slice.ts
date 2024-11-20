// manage state , action 

import { createSlice } from "@reduxjs/toolkit";


type PostType = {
    post_id: string,

}

const initialState : PostType = {
    post_id: '',
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    }
})

const postReducer = postSlice.reducer;
export default postReducer;