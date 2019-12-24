import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCHING
} from "./comments.constant";

const initialState: any = {};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_FETCHING: {
      const id = action.payload;
      return {
        ...state,
        [id]: {
          isFetching: true,
          isFetched: false,
          data: []
        }
      };
    }
    case ACTION_FETCHED: {
      const { id, data } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetched: true,
          isFetching: false,
          data: [...data]
        }
      };
    }
    case ACTIION_FETCH_FAIL: {
      const id = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetched: false,
          isFetching: false
        }
      };
    }
    default:
      return state;
  }
};
