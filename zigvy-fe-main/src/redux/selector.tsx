import { RootState } from "./store";

export const taskPostSelector = (state: RootState) => state.posts;

export const taskUserSelector = (state: RootState) => state.users;
