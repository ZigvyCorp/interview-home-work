import { createReducer } from "@reduxjs/toolkit";
import { UserActionsType } from "../actionTypes";
import { Users } from "../../API/User/Interface";

const initialState: {
  users: Users.UserList;
  user: Users.User;
} = {
  users: [],
  user: {},
};

export default createReducer(initialState, (builder) =>
  builder.addCase(
    UserActionsType.setUsers,
    (state: { [key: string]: any }, action: { [key: string]: any }) => {
      state.users = action.payload;
    }
  )
);
