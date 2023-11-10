// Utilities
import cloneDeep from "lodash/cloneDeep";
import type { ReduxState } from 'lib/redux';
import { createSelector } from "@reduxjs/toolkit";

// Interface
import { User } from "./interface.ts"

export const getAllUsers = (state: ReduxState): User[] => {
  return cloneDeep(state.manageUsers.users);
}

export const getUserById = (state: ReduxState, userId: number): User => {
  const users: User[] = getAllUsers(state);

  return users.filter(user => user.id === userId)?.[0]
}