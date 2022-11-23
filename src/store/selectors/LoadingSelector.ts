import {createSelector} from 'reselect';

const getLoading = (state: any) => state.loading;

export function createLoadingSelector() {
  return createSelector([getLoading], (loading) => loading.loading);
}

export function createOpacitySelector() {
  return createSelector([getLoading], (loading) => loading.opacity);
}