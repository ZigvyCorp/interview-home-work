export const USER_REPONSE_MESSAGES = {
  GET_ALL_USERS: {
    SUCCESS: 'Get all users success'
  },
  VALIDATION: {
    ERROR: 'Validation error'
  },
  LOGIN: {
    SUCCESS: 'Login success'
  },
  LOGOUT: {
    SUCCESS: 'Logout success'
  },
  REGISTER: {
    SUCCESS: 'Register success'
  },
  EMAIL: {
    IS_REQUIRED: 'Email is required',
    IS_NOT_VALID: 'Email is not valid',
    IS_NOT_EXISTS: 'Email is not exists',
    ALREADY_EXISTS: 'Email already exists',
    MUST_BE_FROM_1_TO_100_CHARACTERS: 'Email must be from 1 to 100 characters'
  },
  NAME: {
    IS_REQUIRED: 'Name is required',
    MUST_BE_STRING: 'Name must be string',
    MUST_BE_FROM_1_TO_100_CHARACTERS: 'Name must be from 1 to 100 characters'
  },
  PASSWORD: {
    IS_REQUIRED: 'Password is required',
    MUST_BE_STRING: 'Password must be string',
    IS_NOT_STRONG: 'Password is not strong',
    MUST_BE_FROM_8_TO_50_CHARACTERS: 'Password must be from 8 to 50 characters'
  },
  CONFIRM_PASSWORD: {
    IS_REQUIRED: 'Confirm password is required',
    MUST_BE_STRING: 'Confirm password must be string',
    CONFIRM_PASSWORD_NOT_MATCH: 'Confirm password not match',
    MUST_BE_FROM_8_TO_50_CHARACTERS: 'Confirm password must be from 8 to 50 characters'
  },
  DATE_OF_BIRTH: {
    IS_REQUIRED: 'Date of birth is required',
    IS_NOT_VALID: 'Date of birth is not valid'
  },
  USER: {
    IS_NOT_EXISTS: 'User is not exists'
  },
  ACCESS_TOKEN: {
    IS_REQUIRED: 'Access token is required',
    IS_NOT_VALID: 'Access token is not valid'
  },
  REFRESH_TOKEN: {
    IS_REQUIRED: 'Refresh token is required',
    IS_NOT_VALID: 'Refresh token is not valid',
    IS_NOT_EXISTS: 'Refresh token is not exists'
  },
  EMAIL_VERIFICATION_TOKEN: {
    IS_REQUIRED: 'Email verification token is required',
    IS_NOT_VALID: 'Email verification token is not valid',
    IS_NOT_EXISTS: 'Email verification token is not exists'
  }
} as const

export const POST_REPONSE_MESSAGES = {
  GET_ALL_POSTS: {
    SUCCESS: 'Get all posts success'
  },
  GET_POST_BY_ID: {
    SUCCESS: 'Get post by id success'
  }
} as const

export const COMMENT_REPONSE_MESSAGES = {
  GET_ALL_COMMENTS: {
    SUCCESS: 'Get all comments success'
  },
  GET_COMMENT_BY_POST_ID: {
    SUCCESS: 'Get comment by post id success'
  }
} as const

export const POST_ID_MESSAGES = {
  IS_REQUIRED: 'Post id is required',
  IS_NOT_VALID: 'Post id is not valid'
} as const
