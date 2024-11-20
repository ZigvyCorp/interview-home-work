import React, { memo } from 'react';
import styles from './comment.module.scss';
import { Tag } from 'antd';
import {
  Row,
  Col,
  Avatar,
} from 'antd';
import moment from 'moment';
import dataUsers from 'data/users.json';

const Comment = memo(({ value }) => {
  const getUser = () => {
    const user = dataUsers.filter((item) => item.id === value.owner)[0]
    return user.username
  }

  return (
    <>
      <Row className={styles.container}>
        <Col xs={{ span: 2 }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Col>
        <Col xs={{ span: 20 }}>
          <Row className={styles.container__comment}>
            <Row gutter={[16, 16]} className={styles.container__comment__author}>
              <Col>{getUser()}</Col>
              <Col>{moment(value.created_at).fromNow()}</Col>
            </Row>
            <div>{value.content}</div>
          </Row>
        </Col>
      </Row>
    </>
  )
})

export default Comment