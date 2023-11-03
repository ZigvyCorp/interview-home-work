import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, Collapse } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {actDetailPage} from './duck/action.js';
const { Meta } = Card;

export default function DetailPage() {

  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actDetailPage(params.id))
  }, [dispatch, params.id])

  
  const post = useSelector((state) => state.detailReducer.data);


  const [test] = [post?.comments.map((comment) => {
    return {
      key: comment.id,
      label: `${comment.name}`,
      children: <p>{comment.body}</p>,
    }
  })];

  const itemsNest = test;

  const items = [
    {
      key: '1',
      label: `${post&&post.lengthComments} Comments`,
      children: <Collapse defaultActiveKey="1" items={itemsNest} />,
    }
  ];

  return (
    <>
      <h1 className='text-center'> DetailPage </h1>
      <Card
        className='mx-auto'
        hoverable
        style={{
          width: 450,
          marginBottom: 50,
        }}
        cover={<Link to={`/detail/${post&&post.id}`}><img style={{ width: 450, }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></Link>}
      >
        <Meta
          title={<Link style={{ color: `black`, }} to={`/detail/${post&&post.id}`}>{post&&post.title}</Link>} description={post&&post.body} />
        <Row>
          <Col span={12} > Author: {post&&post.author}   </Col>
          <Col span={12} style={{ textAlign: `end`, }}>  Created at: {post&&post.createdDate} </Col>
        </Row>

        <Collapse items={items} className='mt-2' />

      </Card>


    </>
  )
}
