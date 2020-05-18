import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the writingPage state domain
 */

const selectWritingPageDomain = state => state.writingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WritingPage
 */

const makeSelectWritingPage = () =>
  createSelector(
    selectWritingPageDomain,
    substate => substate,
  );

export default makeSelectWritingPage;
export { selectWritingPageDomain };
