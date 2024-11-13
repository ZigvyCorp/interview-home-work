import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess, handleFilterPosts, setLoading } from '../redux/actions/postActions';
import Post from './Post';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts = [], filterPosts = [], loading, error } = useSelector((state) => state);
  let currentPosts = posts;
  
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('persist:root'));
    const localPosts = localStorageData ? JSON.parse(localStorageData.posts) : null;

    if (localPosts && localPosts.length > 0) {
      console.log("Using posts from LocalStorage:", localPosts);
      currentPosts = localPosts;
    } else {
      console.log("Fetching posts from API...");
      dispatch(fetchPostsRequest());
    }
  }, []);

  currentPosts = filterPosts.length > 0 ? filterPosts : posts;

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginatedPosts = currentPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(currentPosts.length / postsPerPage);

  const filterPost = (e) => {
    const filterElement = document.getElementById("text-filter");
    if (!filterElement) {
      return;
    }

    if (filterElement.value == "") {
      dispatch(handleFilterPosts([]));
      return;
    }

    const filterPosts = posts.filter((post) => post.title.includes(filterElement.value));
    dispatch(handleFilterPosts(filterPosts));
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error != '') {
    return (
      <div className="container mt-4">
        <p className="text-danger">Error: {error}</p>
      </div>
    );
  }

  if (!currentPosts.length) {
    return (
      <div className="container mt-4">
        <p className="text-danger">No posts available</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 align-item-center">
      <div className="mb-4 d-flex justify-content-center">
        <div className="input-group">
          <input type="text" id="text-filter" className="form-control" placeholder="Search posts..." />
          <button className="btn btn-primary" onClick={filterPost}>Filter</button>
        </div>
      </div>
      {paginatedPosts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
      <div className="d-flex justify-content-center mt-4 mb-4">
        <div className="pagination">
          <button className="btn btn-primary" onClick={prevPage} disabled={page === 1}>
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn ${page === index + 1 ? 'btn-secondary' : 'btn-light'} mx-1`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button className="btn btn-primary" onClick={nextPage} disabled={page === totalPages}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
