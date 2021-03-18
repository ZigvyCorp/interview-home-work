import React from 'react';
import { Row, Col, Avatar } from 'antd';

export default function CommentItem({ comment: { createdAt, content, user: { name } } }) {
  return (
    <div style={{marginBottom: '15px'}}>
      <Row gutter={[16,16]} >
        <Col>
          <Avatar src="/public/avatar.jpg" />
        </Col>
        <Col flex="1">
          <Row gutter={[16,16]}>
            <Col>{name}</Col>
            <Col>{new Date(createdAt).toDateString()}</Col>
          </Row>
          <Row>{content}</Row>
        </Col>
      </Row>
    </div>
  )
}