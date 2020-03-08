import React from 'react'
import { Card, Typography, Row, Col } from 'antd'

const { Text, Title } = Typography

const Post = ({ data }) => {
  const { title, content, owner } = data
  const { name } = owner

  return (
    <Card
      headStyle={{ textAlign: 'center', border: 'none' }}
      bodyStyle={{ paddingTop: 0 }}
      title={<Title level={4}>{title}</Title>}
    >
      <Row type="flex" justify="space-around">
        <Col span={12}>author</Col>
        <Col span={12}>tags</Col>
      </Row>
    </Card>
  )
}

export default Post
