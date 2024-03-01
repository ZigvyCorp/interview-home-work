import SingleResponse from "./single.response.js";
import PagedList from "../schema/pagedList.class.js";

export default class ListResponse extends SingleResponse {
  /**
   * @param {array} items - List of items for current page.
   * @param {number} totalItems - Total items.
   * @param {number} page - Current page.
   * @param {number} totalPages - Total pages.
   * @param {number} itemsPerPage - Items per page.
   */
  constructor(items = [], totalItems = 0, page = 1, itemsPerPage = 25, meta = {}) {
    const listData = new PagedList(items, totalItems, page, itemsPerPage, meta);
    super(listData);
  }
}
