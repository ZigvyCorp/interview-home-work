import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_ALERT,
  ACTION_FETCH
} from "./createPost.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
  alert: {
    type: string;
    content: string;
  };
}

const initialState: IReducer = {
  isFetched: false,
  isFetching: false,
  data: {},
  alert: {
    type: "",
    content: ""
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
        ...state,
        isFetching: true,
        isFetched: false
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
        isFetching: false
      };
    }
    case ACTION_ALERT: {
      return {
        ...state,
        alert: { ...action.payload }
      };
    }
    default:
      return state;
  }
};
