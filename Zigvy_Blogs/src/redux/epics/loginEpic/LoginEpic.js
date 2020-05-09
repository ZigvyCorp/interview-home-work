import 'rxjs';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, filter, map, takeUntil, catchError } from 'rxjs/operators';

import { NAME_EPICS } from './NameEpics';
import { NAME_ACTIONS } from '../../actions/loginActions/ActionNames'
import LoginBusiness from '../../../business/LoginBusiness'

const resolver = action => {
  var loginBusiness = new LoginBusiness()
  return (promise = new Promise((resolve, reject) => {
    switch (action.typeAction) {
      case NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN:
        loginBusiness.login(
          action.data,
          success => {
            if (success.length > 0) {
              resolve({
                data: success,
                actionType: NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN_SUCCESS,
              });
            } else {
              reject({
                data: failed,
                actionType: NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN_FAILED,
              })
            }
          },
          failed => {
            reject({
              data: failed,
              actionType: NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN_FAILED,
            })
          }
        )
        break;
      case NAME_ACTIONS.LOGIN.LOGIN_SCREEN_RESET_LOGIN_STATUS:
        resolve({
          actionType: NAME_ACTIONS.LOGIN.LOGIN_SCREEN_RESET_LOGIN_STATUS,
        })
      break;
    }
  }));
};

const dispatch = action => {
  switch (action.actionType) {
    case NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN_SUCCESS:
      return {
        type: NAME_EPICS.EPIC_LOGIN_SCREEN.EPIC_LOGIN_SUCCESS,
        data: action.data,
      };
    case NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN_FAILED:
      return {
        type: NAME_EPICS.EPIC_LOGIN_SCREEN.EPIC_LOGIN_FAILED,
        data: action.data,
      };
    case NAME_ACTIONS.LOGIN.LOGIN_SCREEN_RESET_LOGIN_STATUS:
      return {
        type: NAME_EPICS.EPIC_LOGIN_SCREEN.EPIC_LOGIN_SCREEN_RESET_LOGIN_STATUS,
      };
  }
};

const ActivitiesTimeLineEpic = action$ =>
  action$.pipe(
    ofType(NAME_ACTIONS.LOGIN.LOGIN_SCREEN),
    mergeMap(action =>
      from(resolver(action)).pipe(
        map(success => dispatch(success)),
        catchError(error => of(dispatch(error))),
        takeUntil(action$.pipe(filter(action => action.type === 'CANCEL'))),
      ),
    ),
  );

export default ActivitiesTimeLineEpic;