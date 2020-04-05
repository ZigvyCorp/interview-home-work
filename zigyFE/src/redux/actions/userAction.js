

export function loginWatcher(authParams) {
  return { type: 'LOGIN_WATCHER', payload: authParams };
}

export function signUpWatcher(content) {
  return { type: 'SIGNUP_WATCHER', payload: content };
}

export function updateProfile(profile) {
  return { type: 'UPDATE_PROFILE', payload:profile  };
}