import { NEXT_PAGE, PAGINATION_CLICKED, PAGINATION_UPDATED, PREVIOUS_PAGE } from "../../constant/redux/action";

const initialState : PageInfo = {
  pageNumber: 0,
  totalPages: 1,
  totalRecords: 0,
  pageSize: 5,
};

export function pageReducer(state = initialState, action: any) {
  switch (action.type) {
    case PAGINATION_UPDATED:
      console.log(action)
      return { ...state, ...action.pageInfo };
    case NEXT_PAGE:
      return { ...state, pageNumber: state.pageNumber + 1 };
    case PREVIOUS_PAGE:
      return { ...state, pageNumber: state.pageNumber - 1 };
    case PAGINATION_CLICKED:
      return { ...state, pageNumber: action.payload.pageNumber };
    default:
      return state;
  }
}
