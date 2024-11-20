import { Button, Col, Row } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GET_COMMENT_DETAIL_SAGA } from '../../../redux/constants/Interview/InterviewConstants';

export default function CommentDetail({ comment }) {
  
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch({
          type: GET_COMMENT_DETAIL_SAGA,
          commentID: comment._id
        })
    } ,[])

   const calculateDaysPass = ()=>{
    const now = Date.now();
    const createdAt = Date.parse(comment.createdAt)
    let hoursPass = (now- createdAt)/ (1000 * 3600);
    hoursPass = Math.round(hoursPass)
    hoursPass = 1 ? `about ${hoursPass} hour` : `about ${hoursPass} hours`; 
    return hoursPass;
   }

  return (
    <Row className='my-2'>
      <Col xs={3}>
          <div className='d-flex justify-content-center align-center py-2'>
          <img src="https://i.pravatar.cc/100?u=fake@pravatar.com" alt="avatar"
          width="50px"
          />
          </div>
      </Col>
      <Col xs={9}>
        <div>
          <span>
            <b>{comment.owner.name}</b>
          </span>
          <span style={{fontSize:"12px"}}> <i>{calculateDaysPass()}</i>  ago</span>
        </div>
        <p>{comment.content}</p>
        <Button>Reply to</Button>
      </Col>
    </Row>
  );
}
