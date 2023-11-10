import React, { useEffect } from 'react'
import Card from 'antd/es/card/Card'
import { useState } from 'react'
import { Button } from 'antd'
import { useDispatch,useSelector } from 'react-redux'
import ItemComment from './ItemComment'
import { GET_API_USERS,GET_API_COMMENTS } from '../store/actions/actionTypes'
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker'
import { memo } from 'react'
const buttonStyle = {
  border: 'none',
  backgroundColor: 'transparent',
  padding: '30px',
  margin: '0 20px',
  fontSize: 16, 
  fontWeight: 500,
  cursor: 'pointer',
  width: '80%',
  display: 'flex',
  justifyContent: 'flex-start',
  borderRadius: 0,
  color: 'rgba(0, 0, 0, 0.5)',
  borderBottom: '2px solid rgba(0, 0, 0, 0.1)', 
};
const ItemPost = ({post}) => {
    const {
        title,
        userId,
        id,
        body
    } = post;
    const [date,setDate]=useState(faker.date.past());
    useEffect(()=>{
      setDate(faker.date.past())
    },[])
    // console.log(date);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users[post.userId-1]);
    const numberOfComments = useSelector(state => state.comments.byPostId[id]);
    // Get APi comment theo ID, 
    useEffect(()=>{
      dispatch({type:GET_API_COMMENTS,payload: { postId: id}})
    },[post])
    console.log(users);
    const [showComments, setShowComments] = useState(false);
  return (
    <div style={{width: '100%'}}>
    <Link to={`/posts/${post.id}`}>
    <Card
    title={<div style={{ textAlign: 'center', fontWeight:'bold',textTransform:'uppercase' }}>{title}</div>}
    bordered={false}
    style={{
      width: '100%',
      boxShadow: 'none'
    }}
    bodyStyle={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div>
      <div >
        <p style={{ fontWeight: 'bold' }}>Author: {users?.name}</p>
        <p style={{ fontWeight: 'bold' }}>Created: {date?.toLocaleDateString()}</p>
      </div>
         <p style={{ maxHeight: '100px', overflow: 'hidden' }}>
            {body}
         </p>
    </div>
  </Card>
  </Link>
  <Button style={buttonStyle} onClick={() => setShowComments(!showComments)}>
      {showComments ? 'Hide Comments' : (numberOfComments ? `${numberOfComments.length} Replies` : 'Loading...')}
   </Button>
    {showComments && <ItemComment postTran={post} /> }
    </div>
  )
}

export default memo(ItemPost);