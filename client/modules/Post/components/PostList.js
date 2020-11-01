import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PostListItem from './PostListItem/PostListItem';
import InfiniteScroll from 'react-infinite-scroller';
function PostList(props) {

  const {comments , posts, loadMore, total, isLoading } = props;

  return (
    <InfiniteScroll
    pageStart={0}
    className="listView"
    loadMore={loadMore}
    hasMore={(total > posts.length && !isLoading)}
    loader={<div className="loader" key={0}>Loading ...</div>}
    >
        {
          posts.map(post => {
            const postComments = comments.filter(com => com.post === post._id)
            return (<PostListItem
              post={post}
              comments={postComments}
              key={post._id.toString()}
            />)
          })
        }
    </InfiniteScroll>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    owner: PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    owner: PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired,
    post: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  loadMore: PropTypes.func.isRequired
};

export default PostList;
