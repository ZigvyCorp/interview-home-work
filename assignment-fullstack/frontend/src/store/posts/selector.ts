import { RootState } from '../rootReducer';

export const postSearchDataSelector = (state: RootState) => state.posts.posts;
export const hasSearchMovieDataSelector = (state: RootState) => state.posts.hasDataSearch;
export const isLoadingSearchMovieSelector = (state: RootState) => state.posts.isLoadingSearch;