import { createSelector } from "reselect";

export const configsSelector = createSelector(
  (state: any) => state.configs,
  configs => configs
);
