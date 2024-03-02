import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostByIdRequest,
  fetchUserByIdRequest,
} from '../redux/actions/actions';
import moment from 'moment';

const PostDetailPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const {
    posts: { post, comments },
    users: { user },
  } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(fetchPostByIdRequest(postId));
    dispatch(fetchUserByIdRequest(post.metadata.userId));
  }, [dispatch, post.metadata.userId, postId]);
  //   console.log('>>>Comment: ', comments.metadata);

  return (
    <Container>
      <h1 className='my-4 text-center'>Post Detail</h1>
      <div>
        <h2>{post.metadata?.title || 'N/A'}</h2>
        <p>{post.metadata?.body || 'N/A'}</p>
        <p>Author: {user.metadata.name}</p>
        <p>Created At: {moment(post.metadata?.createdAt).format("DD/MM/YYYY") || 'N/A'}</p>
        <h3>Comments</h3>
        <ul>
          {comments.metadata
            .filter((comment) => comment.postId == postId)
            .map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            ))}
        </ul>
      </div>
      <Button as={Link} to={`/`} variant='primary'>
        Back to Home
      </Button>
    </Container>
  );
};

export default PostDetailPage;
