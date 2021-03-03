import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Post from '../components/Post';
import Paginate from '../components/Paginate';
import SearchBox from '../components/SearchBox';
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
      <div className='py-4'>
        <Route render={({ history }) => <SearchBox history={history} />} />
      </div>

      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
          <br />
        </div>
      ))}

      <div>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
      </div>
    </>
  );
};

export default HomeScreen;
