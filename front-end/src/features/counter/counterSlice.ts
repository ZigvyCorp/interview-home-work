    import { createSlice } from "@reduxjs/toolkit";

    export const counterSlice=createSlice({
        name:"counter",
        initialState:{
            value:0
        },
        reducers:{
            increase:(state)=>{
                state.value+=1
            },
            decrease:(state)=>{
                state.value-=1
            },
            increaseByMount:(state, action)=>{
                state.value+=action.payload
            }
        }
    })

export const {increase, decrease, increaseByMount}=counterSlice.actions

export const selectCount =(state:any)=>state.counter.value

export default counterSlice.reducer