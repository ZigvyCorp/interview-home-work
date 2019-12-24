import { ACTION_CHANGE_LANGUAGE } from "./configs.constant";

export const actionChangeLanguage = (payload: object) => ({
  type: ACTION_CHANGE_LANGUAGE,
  payload
});
