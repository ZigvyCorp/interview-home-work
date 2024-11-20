import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Post from './components/Post';
import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from "react-redux";
import {
  onNextPage,
  onPrevPage,
  onPageNumClick,
  getPostsFetch,
  onFetchComments,
} from './redux/actions';

import { useEffect } from "react";

function App() {
  const { posts, currentPage, postsPerPage, filteredPosts } = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
    dispatch(onFetchComments());
  }, [dispatch]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * postsPerPage;
  const indexofFirstPage = indexOfLastPage - postsPerPage;

  const visiblePosts = filteredPosts.slice(indexofFirstPage, indexOfLastPage);

  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(onPrevPage());
    }
  };

  const navigateNext = () => {
    if (currentPage !== totalPages) {
      dispatch(onNextPage());
    }
  };

  const handlePageNumClick = (pageNum) => {
    dispatch(onPageNumClick(pageNum));
  };

  return (
    <div className="App bg-light">
      <header>
        <CustomNavbar />
      </header>

      <div>
        <ul className="list-unstyled">
          {visiblePosts.map((post) => (
            <li key={post.id}>
              <Post {...post} />
            </li>
          ))}
        </ul>

        <Pagination className='mt-4 d-flex w-100 justify-content-center align-items-center'>
          <Pagination.First onClick={() => handlePageNumClick(1)} />
          <Pagination.Prev onClick={navigatePrev} />
          {pages.map((pageNum) => (
            <Pagination.Item
              key={pageNum}
              active={pageNum === currentPage}
              onClick={() => handlePageNumClick(pageNum)}>
              {pageNum}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={navigateNext} />
          <Pagination.Last onClick={() => handlePageNumClick(totalPages)} />
        </Pagination>

        <footer>
          Page {currentPage} of {totalPages}
        </footer>
      </div>
    </div>
  );
}

export default App;
