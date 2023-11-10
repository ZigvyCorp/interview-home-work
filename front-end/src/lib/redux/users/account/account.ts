// Utilities
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Interface
import { AccountState } from "./interface.ts"

// Constants
import { DEFAULT_ACCOUNT } from 'constants/index.ts'

const initialState: AccountState = {
  account: DEFAULT_ACCOUNT
}

export const account = createSlice({
  name: 'account',
  initialState,

  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload
    }
  },
})
