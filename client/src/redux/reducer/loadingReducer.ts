import { FINISHED, LOADING } from "../../types/redux/action";

const initialState = false;

export function loadingReducer(state = initialState, action: ReduxAction) {
  switch (action.type) {
    case LOADING:
      return true;
    case FINISHED:
      return false;
    default:
      return state;
  }
}
