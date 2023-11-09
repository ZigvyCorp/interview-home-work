import './pagination.css';

const Pagination = ({ postsPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
