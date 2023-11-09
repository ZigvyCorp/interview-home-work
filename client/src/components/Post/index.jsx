import './styles.css'
import { Col, Row, Space, Tag, Grid, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Comment from '../Comment'

const Post = ({ title, content, user, comments, createdAt }) => {
  const summary = content?.split(' ', 25).join(' ')
  const [replyCount, setReplyCount] = useState(0)
  const createdDate = new Date(createdAt)

  useEffect(() => {
    setReplyCount(comments.length)
  }, [comments])

  const [collapse, setCollapse] = useState(true)
  return (
    <div className='post-container'>
      <div className='post'>
        <Row justify={'space-between'} gutter={[0, 16]}>
          <Col span={24} className='title'>
            <h1>{title || 'Post title 1'}</h1>
          </Col>
          <Col xs={24} sm={12}>
            <p>Author: {user.name || 'Anonymous'}</p>
            <p>Created at: {createdDate.toDateString()}</p>
          </Col>
          <Col xs={24} sm={6}>
            <Space size={[8, 16]} wrap>
              <Tag color='magenta'>magenta</Tag>
              <Tag color='red'>red</Tag>
              <Tag color='volcano'>volcano</Tag>
              <Tag color='orange'>orange</Tag>
              <Tag color='gold'>gold</Tag>
              <Tag color='lime'>lime</Tag>
              <Tag color='green'>green</Tag>
              <Tag color='cyan'>cyan</Tag>
              <Tag color='blue'>blue</Tag>
              <Tag color='geekblue'>geekblue</Tag>
              <Tag color='purple'>purple</Tag>
            </Space>
          </Col>
          <Col span={24}>
            <Typography.Text>
              {summary + '...' ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'}
            </Typography.Text>
          </Col>
          <div className='comment-section'>
            <span
              style={{ color: '#646464', cursor: 'pointer' }}
              onClick={() => {
                setCollapse(!collapse)
              }}
            >
              {replyCount === 0 ? '' : replyCount === 1 ? '1 reply' : `${replyCount} repllies`}
            </span>
            <hr style={{ border: 'solid 1px #ececec', width: '100%' }} />
            <div className='commments' hidden={collapse}>
              {comments.map((comment) => {
                return (
                  <Comment
                    content={comment.content}
                    key={comment.id}
                    ownerId={comment.owner}
                    createdAt={comment.created_at}
                  />
                )
              })}
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Post
