import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Adam Levine',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
})

// export const {} = userSlice.actions

export default userSlice.reducer
