import { ACTION_TOGGLE_POPUP, ACTION_CLOSE_POPUP } from "./popup.constant";

export const actionTogglePopup = (payload: { toggle: boolean; data: any }) => ({
  type: ACTION_TOGGLE_POPUP,
  payload
});

export const actionClosePopup = () => ({
  type: ACTION_CLOSE_POPUP
});
