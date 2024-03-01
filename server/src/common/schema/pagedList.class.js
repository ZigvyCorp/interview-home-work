export default class PagedList {
  constructor(items = [], totalItems = 1, page = 1, itemsPerPage = 10, meta = {}) {
    this.items = items;
    this.totalItems = totalItems;
    this.page = page;
    this.totalPages = Math.ceil(totalItems / itemsPerPage);
    this.itemsPerPage = itemsPerPage;
    this.meta = meta;
  }
}
