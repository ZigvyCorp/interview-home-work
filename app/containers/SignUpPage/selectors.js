import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUpPage state domain
 */

const selectSignUpPageDomain = state => state.signUpPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUpPage
 */

const makeSelectSignUpPage = () =>
  createSelector(
    selectSignUpPageDomain,
    substate => substate,
  );

export default makeSelectSignUpPage;
export { selectSignUpPageDomain };
