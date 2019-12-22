import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  initStore: false,
  loading: false,
  userData: {},
  token: '',
  authenRedirectPath: '/'
}

const checkMeStart = (state, action) => {
  return update(state, {
    loading: {$set: true}
  })
}

const checkMeSuccess = (state, action) => {
  return update(state, {
    initStore: {$set: true},
    loading: {$set: false},
    userData: {$set: action.userData},
    token: {$set: action.token}
  })
}

const checkMeFail = (state, action) => update(state, {
  initStore: {$set: true},
  loading: {$set: false}
})

const signUpStart = (state, action) => {
  return update(state, {
    loading: {$set: true}
  })
}

const signUpSuccess = (state, action) => {
  return update(state, {
    loading: {$set: false},
    userData: {$set: action.userData},
    token: {$set: action.token}
  })
}

const signUpFail = (state, action) => update(state, {
  loading: {$set: false},
})

const loginStart = (state, action) => {
  return update(state, {
    loading: {$set: true}
  })
}

const loginSuccess = (state, action) => {
  return update(state, {
    loading: {$set: false},
    userData: {$set: action.userData},
    token: {$set: action.token}
  })
}

const loginFail = (state, action) => update(state, {
  loading: {$set: false},
})

const logoutStart = (state, action) => {
  return update(state, {
    loading: {$set: true}
  })
}

const logoutSuccess = (state, action) => {
  return update(state, {
    loading: {$set: false},
    userData: {$set: {}},
    token: {$set: ''}
  })
}

const logoutFail = (state, action) => update(state, {
  loading: {$set: false},
  userData: {$set: {}},
  token: {$set: ''}
})


export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_ME_START: return checkMeStart(state, action);
    case actionTypes.CHECK_ME_SUCCESS: return checkMeSuccess(state, action);
    case actionTypes.CHECK_ME_FAIL: return checkMeFail(state, action)
    case actionTypes.SIGNUP_START: return signUpStart(state, action);
    case actionTypes.SIGNUP_SUCCESS: return signUpSuccess(state, action);
    case actionTypes.SIGNUP_FAIL: return signUpFail(state, action)
    case actionTypes.LOGIN_START: return loginStart(state, action);
    case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL: return loginFail(state, action)
    case actionTypes.LOGOUT_START: return logoutStart(state, action);
    case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
    case actionTypes.LOGOUT_FAIL: return logoutFail(state, action)
    default: return state;
  }
}