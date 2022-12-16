import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './PostItem.module.scss';
import Author from './author';
import Replies from './replies';
import { Link } from 'react-router-dom';

const tags = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const PostItem = ({ post }) => {
  return (
    <Row className="py-5">
      <Col sm={12}>
        <div className="row">
          <Link to={`/post/${post.id}`} className="text-decoration-none">
            <h1 className={styles.title} title={post.title}>
              {post.title}
            </h1>
          </Link>
        </div>
        <Row md={12} className="d-flex">
          <Col md={8}>
            <Author user={post.user} />
          </Col>
          <Col md={4} className="float-end">
            {tags.map((tagItem) => {
              return (
                <span className={`badge text-bg-${tagItem} m-1`}>
                  {tagItem}
                </span>
              );
            })}
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        <p className={styles.postContent}>{post.body}</p>
      </Col>
      <Col sm={12}>
        <Replies replies={post.comments} />
      </Col>
    </Row>
  );
};

export default PostItem;
