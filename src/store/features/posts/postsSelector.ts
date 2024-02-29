import { RootState } from "@/store/store";

export const postsSelector = (state: RootState) => state.posts;
export const getFilter = (state: RootState): string => state.posts.filter;
