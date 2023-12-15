import { postConsts } from "../constants";
import { useSelector } from "react-redux";

export const getListPostActionRequest = (payload: any) => {
  return {
    type: postConsts.GET_LIST_POST_REQUEST,
    payload,
  };
};
export const getListPostActionSuccess = (payload: any) => {
  return {
    type: postConsts.GET_LIST_POST_SUCCESS,
    payload,
  };
};
export const getListPostActionFail = (payload: any) => {
  return {
    type: postConsts.GET_LIST_POST_FAIL,
    payload,
  };
};

export const getCommentsInPostActionRequest = (payload: any) => {
  return {
    type: postConsts.GET_COMMENTS_IN_POST_REQUEST,
    payload,
  };
};
export const getCommentsInPostActionSuccess = (payload: any) => {
  return {
    type: postConsts.GET_COMMENTS_IN_POST_SUCCESS,
    payload,
  };
};
export const getCommentsInPostActionFail = (payload: any) => {
  return {
    type: postConsts.GET_COMMENTS_IN_POST_FAIL,
    payload,
  };
};
//
export const searchPostActionRequest = (payload: any) => {
  return {
    type: postConsts.SEARCH_POST_REQUEST,
    payload,
  };
};
export const searchPostActionSuccess = (payload: any) => {
  return {
    type: postConsts.SEARCH_POST_SUCCESS,
    payload,
  };
};
export const searchPostActionFail = (payload: any) => {
  return {
    type: postConsts.SEARCH_POST_FAIL,
    payload,
  };
};
