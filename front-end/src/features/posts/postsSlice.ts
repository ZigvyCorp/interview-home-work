import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../type/IPost";



export const postsSlice=createSlice({
    name:"posts",
    initialState:{
      value:  [] as IPost[],
      searchQuery:'' as string,
      currentPage:1,
      totalPage: 0,
    },
    reducers:{
      setAllPost:(state, action)=>{
        state.value=action.payload
        state.totalPage=action.payload.length
      },
      onPage:(state, action)=>{
        state.currentPage=action.payload
      },
      setSearchQuery:(state, action)=>{
        state.searchQuery=action.payload
      }
    }
})

export const {setAllPost, onPage, setSearchQuery}=postsSlice.actions

export const selectAllPost=(state:any)=>state.posts.value

export const selectCurrentPage=(state:any)=>state.posts.currentPage

export const selectTotalPage=(state:any)=>state.posts.totalPage

export const selectSearchQuery=(state:any)=>state.posts.searchQuery

export default postsSlice.reducer