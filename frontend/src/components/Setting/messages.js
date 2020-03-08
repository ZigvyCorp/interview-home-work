import { defineMessages } from 'react-intl'

export const scope = 'test.components.Setting'

export default defineMessages({
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  repeatPassword: {
    id: `${scope}.repeatPassword`,
    defaultMessage: 'Repeat Password',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Fullname',
  },
  dob: {
    id: `${scope}.dob`,
    defaultMessage: 'Date of birth',
  },
  gender: {
    id: `${scope}.gender`,
    defaultMessage: 'Gender',
  },
  male: {
    id: `${scope}.male`,
    defaultMessage: 'Male',
  },
  female: {
    id: `${scope}.female`,
    defaultMessage: 'Female',
  },
  other: {
    id: `${scope}.other`,
    defaultMessage: 'Other',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign In',
  },
  usernameIsRequired: {
    id: `${scope}.usernameIsRequired`,
    defaultMessage: 'Username is required',
  },
  passwordIsRequired: {
    id: `${scope}.passwordIsRequired`,
    defaultMessage: 'Password is required',
  },
  passwordMinLength: {
    id: `${scope}.passwordMinLength`,
    defaultMessage: 'Password must be at least 8 characters long',
  },
  passwordMaxLength: {
    id: `${scope}.passwordMaxLength`,
    defaultMessage: 'Password must be at most 30 characters long',
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
  genderIsInvalid: {
    id: `${scope}.genderIsInvalid`,
    defaultMessage: 'Gender is invalid',
  },
  repeatPasswordNotMatch: {
    id: `${scope}.repeatPasswordNotMatch`,
    defaultMessage: 'Repeat password is not match with password',
  },
  signOut: {
    id: `${scope}.signOut`,
    defaultMessage: 'Sign Out',
  },
})
