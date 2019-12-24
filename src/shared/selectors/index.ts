import { createSelector } from "reselect";
import { translateByLanguage } from "src/i18n";

export const translateSelector = createSelector(
  (state: any) => state.configs,
  configs => translateByLanguage(configs.language)
);
