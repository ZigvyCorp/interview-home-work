import { createSelector } from "reselect";
export const popupSelector = createSelector(
  (state: any) => state.popup,
  popup => popup
);
