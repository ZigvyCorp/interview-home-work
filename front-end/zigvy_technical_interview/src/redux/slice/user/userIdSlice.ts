import { userActionTypes } from "../../actions-types/userActionTypes";
import { UserIdAction, UserIdState } from "../../types/user/userTypes";

const initialState: UserIdState = {
  loadingUserId: false,
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
  errorUserId: null,
};

export default (state = initialState, action: UserIdAction) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_ID_REQUEST:
      return {
        ...state,
        loadingUserId: true,
      };
    case userActionTypes.FETCH_USER_ID_SUCCESS:
      return {
        ...state,
        loadingUserId: false,
        user: action.payload.user,
        errorUserId: null,
      };
    case userActionTypes.FETCH_USER_ID_FAILURE:
      return {
        ...state,
        loadingUserId: false,
        user: {},
        errorUserId: action.payload.errorUserId,
      };
    default:
      return {
        ...state,
      };
  }
};
