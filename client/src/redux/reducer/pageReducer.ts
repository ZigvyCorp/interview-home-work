import {
  NEXT_PAGE,
  PAGINATION_CLICKED,
  PAGINATION_UPDATED,
  PREVIOUS_PAGE,
} from "../../constant/redux/action";

const initialState: PageInfo = {
  pageNumber: 0,
  totalPages: 1,
  totalRecords: 0,
  pageSize: 5,
};

export function pageReducer(state = initialState, action: any) {
  console.log(state)
  switch (action.type) {
    case PAGINATION_UPDATED:
      return { ...state, ...action.pageInfo };
    default:
      return state;
  }
}
