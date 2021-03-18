import React from 'react'
import { Row, Col, Avatar } from 'antd'

export default function UserInfo() {
  return (
    <Row>
      <Col>
        <Avatar src="/public/avatar.jpg" />
      </Col>
      <Col style={{ paddingLeft: '5px' }}>
        Adam Levine
      </Col>
    </Row>
  )
}
