import {
  NEXT_PAGE,
  PAGE_CHANGED,
  PAGINATION_CLICKED,
  PREVIOUS_PAGE,
} from "../../constant/redux/action";


export function pageChanged(pageNumber: number) {
  console.log("sd " + pageNumber)
  return {
    type: PAGE_CHANGED,
    pageIndex: pageNumber,
  };
}
