import { SET_POST_DETAIL, SET_POST_LIST, SET_PAGINATION } from "./constant";

export const postData = (data = [], action: any) => {
  switch (action.type) {
    case SET_POST_LIST:
      return action.data;
    case SET_POST_DETAIL:
      return action.data;
    case SET_PAGINATION:
      return action.data;
    default:
      return data;
  }
};
