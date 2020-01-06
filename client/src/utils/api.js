import axios from "./ncAxios";
import { some, get, map } from "lodash";
import { X_API_KEY } from "../constant/constants";

export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "REQUEST"
  };
};

export const createLoadingSelector = actions => state => {
  return actions.some(action => get(state, `loading.${action}`));
};

export const errorReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "FAILURE" ? payload.message : ""
  };
};

export const createErrorMessageSelector = actions => state => {
  return (
    actions
      .map(action => get(state, `error.${action}`))
      .compact()
      .first() || ""
  );
};

export default function callAPI(
  endpoint,
  method = "GET",
  body,
  typeAuthor,
  accesstoken
) {
  return axios({
    url: `/${endpoint}`,
    method,
    headers: {
      "access-control-request-origin": "*",
      "content-type": "application/json",
      accept: "application/json",
      "X-Api-Key": X_API_KEY,
      Authorization: `${typeAuthor} ` + accesstoken
    },
    data: body
  }).catch(err => {
    return err;
  });
}
