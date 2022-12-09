import { Tag } from 'antd';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from './Comment';

export default function Post({ item }) {
  const users = useSelector((state) => state.InterviewReducer.userData);
  const comments = useSelector((state) => state.InterviewReducer.commentData);
  // console.log('comments: ', comments);
  const colorTagArray = ["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple" ]

  const handleRandomTagColor = (array)=>{
    const randomNumber = Math.floor(Math.random()* array.length);
    return randomNumber
  }

  const user = users?.find((particularUser) => {
    return particularUser._id === item.owner;
  }) ;
  
  
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
  const myDate = handleDateFormat(item.createdAt);

  const thisComments = comments.filter((comment, index) => {
    return comment.post === item._id;
  });
  // console.log('thisComments: ', thisComments);
  const handleRenderTags = ()=>{
    return item?.tags.map((tag, index)=>{
      const colorClass =  colorTagArray[handleRandomTagColor(colorTagArray)];
      return <Tag key={"index" + index} color={colorClass}>{tag}</Tag>
    })
  }
  return (
    <div className='my-4'>
      <Container>
        <Link to={`detail/${item._id}`}>
          <p className='text-center h2'>{item.title}</p>
        </Link>
        <Row> 
          <Col xs={3}>
            <p><b>Author</b>: {user?.name || 'Tri'}</p>
            <p><b>Created at</b>: {myDate} </p>
          </Col>
          <Col xs={5}></Col>
          <Col xs={4}>
            {handleRenderTags()}
          </Col>
        </Row>
        <p>
          {item.content.length < 100 ?  item.content : item.content.slice(0, 100) + "..."   }
        </p>
        <p><b>{thisComments.length}</b> replies </p>
        { 
        thisComments.length > 0 ?  <Comment thisComments={thisComments} /> : ""
        }
       
      </Container>
    </div>
  );
}
