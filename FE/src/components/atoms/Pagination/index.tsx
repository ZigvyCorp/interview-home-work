interface PaginationProps {
  currentPage: number;
  pageSize: number;
  listSize: number;
  onChangePage: (paramNumber: number) => void;
}

export const Pagination = ({
  listSize,
  currentPage,
  pageSize,
  onChangePage,
}: PaginationProps) => {
  return (
    <div className="mt-1">
      {listSize > 0 && (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                onClick={() =>
                  onChangePage(currentPage > 1 ? currentPage - 1 : 1)
                }
                className="page-link"
                href="#"
              >
                Previous
              </a>
            </li>
            {Array.from(Array(Math.round(listSize / pageSize)).keys()).map(
              (item) => {
                return (
                  <li
                    key={item}
                    className={`page-item ${
                      currentPage === item + 1 ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => onChangePage(item + 1)}
                      className="page-link"
                      href="#"
                    >
                      {item + 1}
                    </a>
                  </li>
                );
              }
            )}
            <li className="page-item">
              <a
                onClick={() =>
                  onChangePage(currentPage < listSize ? currentPage + 1 : 1)
                }
                className="page-link"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
