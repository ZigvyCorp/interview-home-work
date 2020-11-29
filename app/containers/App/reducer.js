import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['data'],
  loginRequest: ['data'],
  logout: ['data'],
  signupRequest: ['data'],
  userSuccess: ['payload'],
  userFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  loading: null,
  error: null,
  payload: null,
});

/* ------------- Selectors ------------- */

export const UserSelectors = {
  selectData: state => state.data,
  selectPayload: state => state.payload,
  selectError: state => state.error,
  selectLoading: state => state.loading,
};

/* ------------- Reducers ------------- */

export const request = (state, { data }) =>
  state.merge({ loading: true, data });

export const login = (state, { data }) => state.merge({ loading: true, data });
export const signUp = (state, { data }) => state.merge({ loading: true, data });
export const logout = (state, { data }) => state.merge(INITIAL_STATE);

export const success = (state, { payload }) => {
  return state.merge({ loading: false, error: null, payload });
};

export const failure = (state, { error }) =>
  state.merge({ loading: false, error, payload: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.USER_REQUEST]: request,
  [Types.LOGIN_REQUEST]: login,
  [Types.LOGOUT]: logout,
  [Types.SIGNUP_REQUEST]: signUp,
  [Types.SIGNUP_REQUEST]: logout,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});
