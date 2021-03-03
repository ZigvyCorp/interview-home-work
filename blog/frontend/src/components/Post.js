import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import ColorfulLabels from './ColorfulLabels';
import Comments from './Comments';
import UserHeader from './UserHeader';
import { getCommentsByPostId } from '../actions/commentActions';

const Post = ({ post, comments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByPostId(post._id));
  }, [dispatch, post]);

  const renderContent = () =>
    post.body.length > 100 ? post.body.substr(0, 100) + ' ...' : post.body;

  const renderTime = (createdAt) => {
    let [yy, mm, dd] = createdAt.split('T')[0].split('-');

    switch (mm) {
      case '01':
        mm = 'Jan';
        break;
      case '02':
        mm = 'Feb';
        break;
      case '03':
        mm = 'Mar';
        break;
      case '04':
        mm = 'Apr';
        break;
      case '05':
        mm = 'May';
        break;
      case '06':
        mm = 'Jun';
        break;
      case '07':
        mm = 'July';
        break;
      case '08':
        mm = 'Aug';
        break;
      case '09':
        mm = 'Sep';
        break;
      case '10':
        mm = 'Oct';
        break;
      case '11':
        mm = 'Nov';
        break;
      default:
        mm = 'Dec';
    }

    return `${mm} ${dd}, ${yy}`;
  };

  return (
    <div className='py-5 border-bottom'>
      <h1 className='text-center'>{post.title}</h1>
      <Row className='justify-content-between'>
        <Col sm={4}>
          <UserHeader userId={post.user} />
          <h6>Created at: {renderTime(post.createdAt)}</h6>
        </Col>
        <Col sm={4}>
          <ColorfulLabels />
        </Col>
      </Row>
      <br />
      <p className='py-3'>{renderContent()}</p>
      <br />
      <Comments comments={comments} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const comments = state.commentsByPostId.comments.filter(
    (comment) => comment.post === ownProps.post._id
  );

  return { comments };
};

export default connect(mapStateToProps)(Post);
