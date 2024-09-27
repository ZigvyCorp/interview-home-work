import { FINISHED, LOADING } from "../../constant/redux/action";

const initialState = false;

export function loadingReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOADING:
      return true;
    case FINISHED:
      return false;
    default:
      return state;
  }
}
