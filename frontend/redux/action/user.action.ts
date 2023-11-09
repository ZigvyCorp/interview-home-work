export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERR = "FETCH_USERS_ERR";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: IUser[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFail = (err: any) => ({
  type: FETCH_USERS_ERR,
  payload: err,
});

export interface IUser {
  id: string;

  name: string;

  username: string;

  email: string;

  address: IAddress;

  phone: string;

  website: string;

  company: ICompany;

  created_at: string;
}

export interface IAddress {
  street: string;

  suite: string;

  city: string;

  zipcode: string;

  geo: IGeo;
}

export interface IGeo {
  lat: string;

  lng: string;
}

export interface ICompany {
  name: string;

  catchPhrase: string;

  bs: string;
}
