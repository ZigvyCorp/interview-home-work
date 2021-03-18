import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { PostListContainer } from '../../containers'

export default class Home extends Component {
  render() {
    return (
      <Row justify="center">
        <Col span={14}><PostListContainer /></Col>
      </Row>
    )
  }
}