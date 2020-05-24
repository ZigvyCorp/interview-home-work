import { createAction } from 'redux-actions';
export function createAsyncAction(action: string): any {
  return {
    [action]: createAction(action),
    [`${action}Success`]: createAction(`${action}_SUCCESS`),
    [`${action}Fail`]: createAction(`${action}_FAIL`),
  };
}
