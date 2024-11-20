// manage state , action 

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type UserType = {
    id: string
    name: string,
    username: string,
    email: string,
    accessToken: string
}

const initialState : UserType= {
    id: '',
    name: '',
    username: '',
    email: '',
    accessToken: '',
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
            state.accessToken = action.payload.accessToken;
        }
    }
})


const userReducer = userSlice.reducer;
export const  {setUser} = userSlice.actions 
export default userReducer;