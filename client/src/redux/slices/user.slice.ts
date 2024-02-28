// manage state , action 

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type UserType = {
    id: string
    name: string,
    username: string,
    email: string
}

const initialState : UserType= {
    id: '1',
    name: 'user',
    username: 'user',
    email: 'user@example.com'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) =>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.email = action.payload.email;
        }
    }
})


const userReducer = userSlice.reducer;
export const  {setUser} = userSlice.actions 
export default userReducer;