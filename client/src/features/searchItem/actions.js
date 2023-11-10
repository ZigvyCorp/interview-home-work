import { SET_SEARCH_ITEM } from "./actionTypes";

export const setSearchItem = (searchItems) => ({
  type: SET_SEARCH_ITEM,
  payload: searchItems,
});
