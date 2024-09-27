import {
  NEXT_PAGE,
  PAGINATION_CLICKED,
  PREVIOUS_PAGE,
} from "../../types/redux/action";

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function previousPage() {
  return {
    type: PREVIOUS_PAGE,
  };
}

export function pageChange(pageNumber: number) {
  return {
    type: PAGINATION_CLICKED,
    pageNumber: pageNumber,
  };
}
