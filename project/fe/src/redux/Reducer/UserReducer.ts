import { IUser } from "../../utils/type.ts";

export const AUTH = "AUTH";

export interface IAuth {
  msg?: string;
  access_token?: string;
  user?: IUser;
}

export interface IAuthType {
  type: typeof AUTH;
  payload: IAuth;
}
const authReducer = (state: IAuth = {}, action: IAuthType): IAuth => {
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
