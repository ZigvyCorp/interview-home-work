import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../type/IComment";

export const commentsSlice=createSlice({
    name:"comments",
    initialState:{
      value:  [] as IComment[]
    },
    reducers:{
      addCommentByPostId:(state, action)=>{
        const uniqueComments=new Set<IComment>([...state.value,...action.payload])
        state.value=Array.from(uniqueComments)
      }

    }
})

export const {addCommentByPostId}=commentsSlice.actions

export const selectCommets=(state:any)=>state.comments.value

export default commentsSlice.reducer