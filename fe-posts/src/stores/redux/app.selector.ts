import { RootState } from '..';

export class SelectorApp {
  static loading = (state: RootState) => state.app.loading;
  static posts = (state: RootState) => state.app.posts;
  static paging = (state: RootState) => state.app.paging;
}
