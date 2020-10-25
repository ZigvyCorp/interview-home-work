import { combineEpics } from 'redux-observable';
import LoginEpic from './loginEpic/LoginEpic';
import SignupEpic from './loginEpic/SignupEpic';
import HomeBlogEpic from './blogEpic/BlogHomeEpic';

export default combineEpics(
    LoginEpic,
    SignupEpic,
    HomeBlogEpic
)