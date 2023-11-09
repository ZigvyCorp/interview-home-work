import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import {
  actionFetchPosts,
  actionFilterPosts,
} from '../redux/action/postAction';

export default function Posts() {
  const posts = useSelector(state => state.posts);
  const query = useSelector(state => state.query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actionFilterPosts({ query: query }));
  }, [dispatch, query]);

  return (
    <div>
      {posts.tempData.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}
