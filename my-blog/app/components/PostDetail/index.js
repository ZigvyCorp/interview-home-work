import { fetchPost } from '@/app/server-action/store/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostDetail = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.selectedPost);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;