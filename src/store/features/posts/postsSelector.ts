import { RootState } from "@/store/store";

export const getPosts = (state: RootState) => state.posts.posts;
