import { createSelector } from 'reselect'

import createReducer from '../../utils/createReducer'

const scope = 'test/user'

const Types = {
  SIGN_IN: `${scope}/SIGN_IN`,
  SIGN_IN_SUCCESS: `${scope}/SIGN_IN_SUCCESS`,
  SIGN_IN_FAILED: `${scope}/SIGN_IN_FAILED`,
  SIGN_UP: `${scope}/SIGN_UP`,
  SIGN_UP_SUCCESS: `${scope}/SIGN_UP_SUCCESS`,
  SIGN_UP_FAILED: `${scope}/SIGN_UP_FAILED`,
  SIGN_OUT: `${scope}/SIGN_OUT`,
}

export const UserTypes = Types

export const UserActions = {
  signIn: (params, callback) => ({ type: Types.SIGN_IN, params, callback }),
  signInSuccess: data => ({ type: Types.SIGN_IN_SUCCESS, ...data }),
  signInFailed: error => ({ type: Types.SIGN_IN_FAILED, error }),
  signUp: params => ({ type: Types.SIGN_UP, params }),
  signUpSuccess: data => ({ type: Types.SIGN_UP_SUCCESS, ...data }),
  signUpFailed: error => ({ type: Types.SIGN_UP_FAILED, error }),
  signOut: () => ({ type: Types.SIGN_OUT }),
}

const initialState = {
  isSignedIn: false,
  accessToken: null,
  profile: null,
  // refreshToken: null,
  pending: {},
  errors: {},
}

export const UserReducer = createReducer(initialState, {
  [Types.SIGN_IN]: draft => {
    draft.pending.signIn = true
  },
  [Types.SIGN_IN_SUCCESS]: (draft, { accessToken, profile }) => {
    draft.isSignedIn = true
    draft.pending.signIn = false
    draft.errors.signIn = null
    draft.accessToken = accessToken
    draft.profile = profile
  },
  [Types.SIGN_IN_FAILED]: (draft, { error }) => {
    draft.isSignedIn = false
    draft.pending.signIn = false
    draft.errors.signIn = error
    draft.accessToken = null
    draft.profile = null
  },
  [Types.SIGN_UP]: draft => {
    draft.pending.signUp = true
  },
  [Types.SIGN_UP_SUCCESS]: (draft, { accessToken, profile }) => {
    draft.isSignedIn = true
    draft.pending.signUp = false
    draft.errors.signUp = null
    draft.accessToken = accessToken
    draft.profile = profile
  },
  [Types.SIGN_UP_FAILED]: (draft, { error }) => {
    draft.isSignedIn = false
    draft.pending.signUp = false
    draft.errors.signUp = error
    draft.accessToken = null
    draft.profile = null
  },
  [Types.SIGN_OUT]: draft => {
    draft.isSignedIn = false
    draft.accessToken = null
    draft.profile = null
  },
})

export const UserSelectors = {
  selectUser: state => state.user || initialState,
  makeSelectIsSignedIn() {
    return createSelector(this.selectUser, userState => userState.isSignedIn || false)
  },
  makeSelectAccessToken() {
    return createSelector(this.selectUser, userState => userState.accessToken)
  },
  makeSelectProfile() {
    return createSelector(this.selectUser, userState => userState.profile || {})
  },
  makeSelectUserId() {
    return createSelector(this.makeSelectProfile(), profile => profile._id)
  },
  makeSelectPending() {
    return createSelector(this.selectUser, userState => userState.pending || {})
  },
  makeSelectSignInPending() {
    return createSelector(this.makeSelectPending(), pending => pending.signIn || false)
  },
  makeSelectSignUpPending() {
    return createSelector(this.makeSelectPending(), pending => pending.signUp || false)
  },
  makeSelectErrors() {
    return createSelector(this.selectUser, userState => userState.errors || {})
  },
  makeSelectSignInError() {
    return createSelector(this.makeSelectErrors(), errors => errors.signIn)
  },
  makeSelectSignUpError() {
    return createSelector(this.makeSelectErrors(), errors => errors.signUp)
  },
}
