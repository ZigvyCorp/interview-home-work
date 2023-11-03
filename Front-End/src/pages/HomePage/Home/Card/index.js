import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Collapse } from 'antd';
const { Meta } = Card;


export default function CardHome(props) {
  const { post } = props;

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
      label: `${post.lengthComments} Comments`,
      children: <Collapse defaultActiveKey="1" items={itemsNest} />,
    }
  ];

  return (
    <>
      <Card
        className='mx-auto'
        hoverable
        style={{
          width: 450,
          marginBottom: 50,
        }}
        cover={<Link to={`/detail/${post.id}`}><img style={{ width: 450, }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></Link>}
      >
        <Meta
          title={<Link style={{color: `black`,}} to={`/detail/${post.id}`}>{post.title}</Link>} description={post.body} />
        <Row>
          <Col span={12} > Author: {post.author}   </Col>
          <Col span={12} style={{ textAlign: `end`, }}>  Created at: {post.createdDate} </Col>
        </Row>

        <Collapse items={items} className='mt-2' />

      </Card>


    </>
  )
}
