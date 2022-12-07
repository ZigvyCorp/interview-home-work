function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumberList = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumberList.push(i);
  }
  return (
    <ul className="pagination d-flex justify-content-center flex-wrap">
      {pageNumberList.map((number) => {
        return (
          <li key={number} className="page-item my-1">
            <button
              onClick={() => paginate(number)}
              className="page-link text-secondary"
            >
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
