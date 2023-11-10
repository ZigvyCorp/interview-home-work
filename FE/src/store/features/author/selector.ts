import { AuthorState } from "./slice";

export const selectAuthor = (state: { author: AuthorState }) =>
  state.author.author;
export const selectAuthorIsLoading = (state: { author: AuthorState }) =>
  state.author.isLoading;
export const selectAuthorErrorMessage = (state: { author: AuthorState }) =>
  state.author.errorMessage;
