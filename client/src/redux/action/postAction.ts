import { POST_FETCH_REQUESTED, POST_FETCH_SUCCEED } from "../../constant/redux/action";

export function postFetched() {
  return {
    type: POST_FETCH_SUCCEED,
  };
}

export function fetchPost(pageIndex: number) {
  return {
    type: POST_FETCH_REQUESTED,
    pageIndex: pageIndex
  };
}