import React, { useEffect, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts as fetchPostsAction,
  fetchComments as fetchCommentsActions,
  loadMore as loadMoreAction,
  searchPost as searchPostAction,
} from './actions';
import PropTypes from 'prop-types';
import Post from '../../components/Post';
import InputSearch from '../../components/InputSearch';
import styled from 'styled-components';

const LoadMore = styled.div`
  text-align: center;
`;

const SearchWrapper = styled.div`
  margin: 25px 16px 25px auto;
  width: 350px;
`;

const Blogs = ({
  fetchPosts,
  paginatedPosts,
  fetchComments,
  commentsByPost,
  loadMore,
  hasFetchAll,
  searchPost,
}) => {
  const loader = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleFetchComments = useCallback(
    (id) => {
      fetchComments(id);
    },
    [fetchComments]
  );

  const handleObserver = useCallback(
    (entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        loadMore();
      }
    },
    [loadMore]
  );

  const loaderRef = loader.current;
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [loaderRef, handleObserver]);

  const handleSearch = useCallback(
    (value) => {
      searchPost(value);
    },
    [searchPost]
  );

  if (paginatedPosts.length === 0) return null;
  return (
    <div>
      <SearchWrapper>
        <InputSearch onSearch={handleSearch} />
      </SearchWrapper>
      {paginatedPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          fetchComments={handleFetchComments}
          comments={commentsByPost[post.id]}
        />
      ))}
      {!hasFetchAll && <LoadMore ref={loader}>Load more</LoadMore>}
    </div>
  );
};

const mapStateToProps = ({ blogs }) => ({
  paginatedPosts: blogs.paginatedPosts,
  page: blogs.page,
  limit: blogs.limit,
  commentsByPost: blogs.comments,
  hasFetchAll: blogs.hasFetchAll,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPostsAction()),
    fetchComments: (id) => dispatch(fetchCommentsActions(id)),
    loadMore: () => dispatch(loadMoreAction()),
    searchPost: (value) => dispatch(searchPostAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

Blogs.propTypes = {
  paginatedPosts: PropTypes.array,
  commentsByPost: PropTypes.object,
  fetchPosts: PropTypes.func,
  fetchComments: PropTypes.func,
  loadMore: PropTypes.func,
  page: PropTypes.number,
  limit: PropTypes.number,
  hasFetchAll: PropTypes.bool,
  searchPost: PropTypes.func,
};
