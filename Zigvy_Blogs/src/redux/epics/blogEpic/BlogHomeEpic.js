import 'rxjs';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, filter, map, takeUntil, catchError } from 'rxjs/operators';

import { NAME_EPICS } from './NameEpics';
import {NAME_ACTIONS} from '../../actions/blogActions/ActionNames'

const resolver = action => {
    return (promise = new Promise((resolve, reject) => {
      switch (action.typeAction) {
      }
    }));
};

const dispatch = action => {
    switch (action.actionType) {
    }
};

const ActivitiesTimeLineEpic = action$ =>
  action$.pipe(
    ofType(NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN),
    mergeMap(action =>
      from(resolver(action)).pipe(
        map(success => dispatch(success)),
        catchError(error => of(dispatch(error))),
        takeUntil(action$.pipe(filter(action => action.type === 'CANCEL'))),
      ),
    ),
  );

export default ActivitiesTimeLineEpic;