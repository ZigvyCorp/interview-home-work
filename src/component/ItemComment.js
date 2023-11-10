import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
const ItemComment = ({postTran}) => {
  // const dispatch = useDispatch();
  const comments = useSelector(state=>state.comments.byPostId[postTran?.id]);
  // useEffect(()=>{
  //   dispatch({type:GET_API_COMMENTS,payload: { postId: postTran.id}})
  // },[postTran,dispatch])
  // console.log(comments);

  return (
    <List
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
          actions={[]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src='https://randomuser.me/api/portraits/men/6.jpg' />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description={item.body}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default ItemComment;