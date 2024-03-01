import { IUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: IUser | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...state,
        user: null,
      };
    },
    register: (state, action: PayloadAction<Omit<IUser, 'id' | 'dob'>>) => {
      return state;
    },
    login: (state, action: PayloadAction<IUser>) => {
      return state;
    },
    saveLogin: (state, action: PayloadAction<IUser | null>) => {
      if (action.payload) {
        const userData = action.payload;
        return {
          ...state,
          user: {
            id: userData._id || '',
            createdAt: userData.createdAt,
            email: userData.email,
            name: userData.name,
            username: userData.username,
          },
        };
      }

      return {
        ...state,
        user: null,
      };
    },
  },
});

export const { register, login, saveLogin, logout } = authSlice.actions;

export default authSlice.reducer;
