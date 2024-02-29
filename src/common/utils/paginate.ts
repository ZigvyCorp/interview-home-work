interface PaginationResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
}

function paginate<T>(
  items: T[],
  pageNumber: number,
  pageSize: number
): PaginationResult<T> {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, items.length);

  const paginatedItems = items.slice(startIndex, endIndex);
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  return {
    items: paginatedItems,
    totalItems,
    totalPages,
  };
}

export default paginate;
