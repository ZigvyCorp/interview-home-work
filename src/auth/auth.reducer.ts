import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_AUTH
} from "./auth.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
  isAuthen: boolean;
}

const initialState: IReducer = {
  isFetched: false,
  isFetching: true,
  data: {},
  isAuthen: false
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_AUTH: {
      return {
        ...state,
        isAuthen: action.payload
      };
    }
    case ACTION_FETCHED: {
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        isAuthen: true,
        data: { ...action.payload }
      };
    }
    case ACTIION_FETCH_FAIL: {
      return {
        ...state,
        isFetched: false,
        isFetching: false,
        isAuthen: false
      };
    }
    default:
      return state;
  }
};
