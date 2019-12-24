import { ACTION_FETCHED, ACTIION_FETCH_FAIL } from "./templates.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
}

const initialState: IReducer = {
  isFetched: false,
  isFetching: true,
  data: {}
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_FETCHED: {
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: { ...action.payload }
      };
    }
    case ACTIION_FETCH_FAIL: {
      return {
        ...state,
        isFetched: false,
        isFetching: false
      };
    }
    default:
      return state;
  }
};
