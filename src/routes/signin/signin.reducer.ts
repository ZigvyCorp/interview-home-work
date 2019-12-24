import {
  ACTION_FETCH,
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_CLEAR_ALERT
} from "./signin.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
  error: {
    type: string;
    message: string;
  };
}

const initialState: IReducer = {
  isFetched: false,
  isFetching: false,
  data: {},
  error: {
    type: "",
    message: ""
  }
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_FETCH: {
      return {
        ...initialState,
        isFetching: true
      };
    }
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
        isFetching: false,
        error: { ...state.error, ...action.payload }
      };
    }
    case ACTION_CLEAR_ALERT: {
      return {
        ...state,
        error: { ...initialState.error }
      };
    }
    default:
      return state;
  }
};
