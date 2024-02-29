import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../type/IUser";



export const usersSlice=createSlice({
    name:"users",
    initialState:{
      value:  [] as IUser[]
    },
    reducers:{
      setAllUsers:(state, action)=>{
        state.value=action.payload
      }
    }
})

export const {setAllUsers}=usersSlice.actions

export const selectAllUser=(state:any)=>state.users.value

export default usersSlice.reducer