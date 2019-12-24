import { createSelector } from "reselect";

export const templatesSelector = createSelector(
  (state: any) => state.templates,
  templates => templates
);
