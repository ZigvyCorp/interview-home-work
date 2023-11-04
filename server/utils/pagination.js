const MAX_ITEM_PER_PAGE = 10;

exports.generatePaging = (page, limit = MAX_ITEM_PER_PAGE) => {
  if (!page || page < 1) {
    page = 1;
  }

  return {
    page: parseInt(String(page)),
    limit: +limit,
    offset: (page - 1) * +limit,
  };
};


exports.generatePagination = (currentPage, totalRecords, maxRecords) => {
  const lastPage = Math.ceil(totalRecords / maxRecords)

  return {
    firstPage: 1,
    prevPage: currentPage - 1 > 0 ? currentPage - 1 : 1,
    nextPage: currentPage + 1 < lastPage ? currentPage + 1 : lastPage,
    lastPage,
    totalRecords,
    maxRecords,
    currentPage,
  }
}
