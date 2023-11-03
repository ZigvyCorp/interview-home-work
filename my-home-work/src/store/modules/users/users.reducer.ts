import { Actions, IUserState, Types } from "./users.constant";
const initialState: IUserState = {
  data: [],
  firstLoad: true,
  loading: true,
  error: null,
};
const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case Types.LOAD_USERS:
      return { ...state, loading: true, error: null };
    case Types.SET_USERS:
      return {
        ...state,
        data: action.payload.users,
        loading: false,
        error: null,
        firstLoad: false,
      };
    case Types.SET_USERS_ERROR:
      return {
        ...state,
        error: action.payload.msg,
        loading: false,
        firstLoad: false,
      };
    default:
      return state;
  }
};

export { initialState, reducer as default };
