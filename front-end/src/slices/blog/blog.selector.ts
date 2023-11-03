import { RootState } from '../../stores';

export class SelectorBlog {
  static list = (state: RootState) => state.blog.list;
  static loading = (state: RootState) => state.blog.loading;
  static paging = (state: RootState) => state.blog.paging;
  static textSearch = (state: RootState) => state.blog.textSearch;
  static detail = (state: RootState) => state.blog.detail;
  static detailLoading = (state: RootState) => state.blog.detailLoading;
}
