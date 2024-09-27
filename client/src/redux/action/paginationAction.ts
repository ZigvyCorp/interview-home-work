import {
  NEXT_PAGE,
  PAGINATION_CLICKED,
  PREVIOUS_PAGE,
} from "../../constant/redux/action";

export function nextPage(currentState: object) {
  return {
    type: NEXT_PAGE,
    state: currentState,
  };
}

export function previousPage(currentState: object) {
  return {
    type: PREVIOUS_PAGE,
    state: currentState,
  };
}

export function pageChange(pageNumber: number, currentState: object) {
  return {
    type: PAGINATION_CLICKED,
    pageNumber: pageNumber,
    state: currentState,
  };
}
