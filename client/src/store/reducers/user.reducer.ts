import { User } from "../../types";
import { ActionRedux } from "../../types/redux.type";
import { SET_LOGIN, SET_TOKEN, SET_USER } from "../types";

interface StateUserInterface {
  user?: User;
  token?: string;
  isLogged: boolean;
}
const initStateUser: StateUserInterface = {
  user: undefined,
  token: undefined,
  isLogged: false,
};
export default (state = initStateUser, { payload, type }: ActionRedux) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case SET_TOKEN:
      return { ...state, token: payload };
    case SET_LOGIN:
      return { ...state, isLogged: payload };
    default:
      return state;
  }
};
