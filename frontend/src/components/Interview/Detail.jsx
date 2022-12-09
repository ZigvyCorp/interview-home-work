import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_COMMENT_SAGA, GET_DETAIL_POST_SAGA } from '../../redux/constants/Interview/InterviewConstants';
import CommentDetail from './Main/CommentDetail';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {postDetail, comments } = useSelector((state) => state.InterviewReducer);
  
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_POST_SAGA,
      id
    })
    dispatch({
      type: GET_COMMENT_SAGA,
      id
    })
  }, [])
  const handleDateFormat = (timeStamp) => {
    let dateFormat = new Date(timeStamp);
    const myDate =
      dateFormat.getDate() +
      '/' +
      (dateFormat.getMonth() + 1) +
      '/' +
      dateFormat.getFullYear();

    return myDate;
  };
  const myDate = handleDateFormat(postDetail.createdAt)
  const handleRenderCommentDetail = () => {
    return comments?.map((comment, index) => {
      return <CommentDetail key={"index" + index} comment={comment} />;
    });
    
  };
  return (

    <Container>
      <Row>
        <Col xs={2} ></Col>
        <Col >
          <h3 className='my-4'>{postDetail.title}</h3>
        <div className='py-3'>
         <img src='https://picsum.photos/800/400' alt="randomPic"  style={{
            objectFit:"cover"
          }} >

          </img>
        </div>
          <p>{postDetail.content}</p>
          <p><b>Created at:</b> {myDate}</p>
          {comments.length ?   <Collapse defaultActiveKey={['1']}>
            <Panel header='Comments' key='1'>
              {handleRenderCommentDetail()}
            </Panel>
          </Collapse>: <p>There's no comment yet</p> }
          
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}
