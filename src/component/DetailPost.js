import React, { useState,useEffect } from 'react'
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemComment from './ItemComment';
const DetailPost = () => {
    const { postId } = useParams();
    const [detail,setDetail]=useState();
    const getPost=useSelector(state=>state.posts[postId-1]);
    // const getSt = useSelector(state=>state);
    const users = useSelector((state) => state.users[getPost?.userId-1]);
    console.log(users);
    console.log(getPost);
    // console.log(getSt);
    useEffect(() => {
        console.log('Post ID changed:', postId);
      }, [postId]);    
  return (
    <div>
      <Card
        title={getPost?.title}
        bordered={false}
        style={{
          width: 1100,
        }}
      >
        <p style={{ fontWeight: 'bold' }} >Author: {users?.name}</p>
        <p>{getPost?.body}</p>
      </Card>
      <ItemComment postTran={getPost}/>
      </div>
  )
    }
export default DetailPost