import React, { useEffect, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts as fetchPostsAction,
  fetchUsers as fetchUsersAction,
  fetchComments as fetchCommentsActions,
  loadMore as loadMoreAction,
  searchPost as searchPostAction,
} from './actions';
import PropTypes from 'prop-types';
import Post from '../../components/Post';
import InputSearch from '../../components/InputSearch';
import styled from 'styled-components';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

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
  fetchUsers,
  commentsByPost,
  users,
  loadMore,
  hasFetchAll,
  searchPost,
  filter,
}) => {
  const loadmoreRef = useRef(null);
  const needLoadMore = useIntersectionObserver(loadmoreRef);

  useEffect(() => {
    return needLoadMore && loadMore();
  }, [needLoadMore, loadMore]);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, [fetchPosts, fetchUsers]);

  const handleFetchComments = useCallback(
    (id) => {
      fetchComments(id);
    },
    [fetchComments]
  );

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
        <InputSearch onSearch={handleSearch} defaultValue={filter} />
      </SearchWrapper>
      {paginatedPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          user={users[post.userId]}
          fetchComments={handleFetchComments}
          comments={commentsByPost[post.id]}
        />
      ))}
      {!hasFetchAll && <LoadMore ref={loadmoreRef}>Load more</LoadMore>}
    </div>
  );
};

const mapStateToProps = ({ blogs }) => ({
  paginatedPosts: blogs.paginatedPosts,
  page: blogs.page,
  limit: blogs.limit,
  commentsByPost: blogs.comments,
  users: blogs.users,
  hasFetchAll: blogs.hasFetchAll,
  filter: blogs.filterValue,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPostsAction()),
    fetchUsers: () => dispatch(fetchUsersAction()),
    fetchComments: (id) => dispatch(fetchCommentsActions(id)),
    loadMore: () => dispatch(loadMoreAction()),
    searchPost: (value) => dispatch(searchPostAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

Blogs.propTypes = {
  paginatedPosts: PropTypes.array,
  commentsByPost: PropTypes.object,
  users: PropTypes.object,
  fetchPosts: PropTypes.func,
  fetchComments: PropTypes.func,
  fetchUsers: PropTypes.func,
  loadMore: PropTypes.func,
  hasFetchAll: PropTypes.bool,
  searchPost: PropTypes.func,
  filter: PropTypes.string,
};
