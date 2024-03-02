import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsRequest,
  fetchCommentsByPostIdRequest,
  fetchUserByIdRequest,
  fetchCommentsRequest,
  fetchUsersRequest,
  fetchPostsByKeywordRequest,
} from '../redux/actions/actions';
import PostCard from '../components/PostCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    posts: { posts, comments },
    users: { users },
  } = useSelector((state) => {
    // console.log('>>>state: ', state);
    return state;
  });
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (posts.metadata.length > 0) {
      dispatch(fetchCommentsRequest());
      dispatch(fetchUsersRequest());
    }
  }, [posts, dispatch]);

  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoading(true);
      // Fetch more posts here
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleSearchPost = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchPostsByKeywordRequest(keyword));
    }
  };

  return (
    <Container>
      <h1 className='my-4 text-center'>Posts</h1>
      <Form.Group controlId='formBasicSearch' className='mb-4'>
        <Form.Control
          type='text'
          placeholder='Enter keyword and click enter...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleSearchPost}
        />
      </Form.Group>
      {posts.metadata.map((post) => {
        return (
          <Row className='justify-content-center' key={post.id}>
            <Col lg={4} md={6} className='mb-4 cursor-pointer'>
              <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                <PostCard
                  post={post}
                  comments={comments.metadata}
                  users={users?.metadata || []}
                />
              </Link>
            </Col>
          </Row>
        );
      })}
      {loading && <p>Loading...</p>}
    </Container>
  );
};

export default HomePage;
