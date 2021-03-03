import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';

import Post from '../components/Post';
import Paginate from '../components/Paginate';
import { getPosts } from '../actions/postActions';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const postsInfo = useSelector((state) => state.posts);
  const { posts, pages, page } = postsInfo;

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
          <br />
        </div>
      ))}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
    </>
  );
};

export default HomeScreen;
