import 'rxjs';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, filter, map, takeUntil, catchError } from 'rxjs/operators';

import { NAME_EPICS } from './NameEpics';
import { NAME_ACTIONS } from '../../actions/blogActions/ActionNames';
import BlogBusiness from '../../../business/BlogBusiness'


const resolver = action => {
  var blogBusiness = new BlogBusiness()
  return (promise = new Promise((resolve, reject) => {
    switch (action.typeAction) {
      case NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN_GET_BLOGS_LIST:
        blogBusiness.getBlogData(
          success => {
            resolve({
              data: success,
              actionType: NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN_GET_BLOGS_LIST_SUCCESS,
            });
          },
          failed => {
            reject({
              data: failed,
              actionType: NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN_GET_BLOGS_LIST_FAILED,
            })
          }
        )
        break;
    }
  }));
};

const dispatch = action => {
  switch (action.actionType) {
    case NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN_GET_BLOGS_LIST_SUCCESS:
      return {
        type: NAME_EPICS.BLOG_HOME_SCREEN.EPIC_BLOG_HOME_SCREEN_GET_BLOGS_LIST_SUCCESS,
        data: action.data,
      };
    case NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN_GET_BLOGS_LIST_FAILED:
      return {
        type: NAME_EPICS.BLOG_HOME_SCREEN.EPIC_BLOG_HOME_SCREEN_GET_BLOGS_LIST_FAILED,
        data: action.data,
      };
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