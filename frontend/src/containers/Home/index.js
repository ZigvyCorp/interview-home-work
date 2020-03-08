import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import moment from 'moment'
import { Spin, Row, Col, Card, Typography, List, Avatar, Tag, Collapse, Input, Icon } from 'antd'

import { timeDiff } from '../../utils/helpers'
import { usePagination } from '../../hooks'
import { UserSelectors } from '../../store/redux/user'
import { PostActions, PostSelectors } from '../../store/redux/post'
import Post from '../../components/Post'
import './index.css'

const { Text, Title } = Typography

const HomePage = ({ posts, total, userId, getPostsPending, getPosts, createComment }) => {
  const [values] = usePagination()

  const [pendingComments, setPendingComments] = useState({})

  useEffect(() => {
    getPosts(values)
  }, [])

  console.log({ posts })

  const handleCommentChange = (e, postId) => {
    e.persist()
    setPendingComments(pendingComments => ({
      ...pendingComments,
      [postId]: e.target.value,
    }))
  }

  const handleCommentEnter = (e, postId) => {
    e.preventDefault()
    if (userId) {
      createComment({ owner: userId, post: postId, content: pendingComments[postId] })
    } else {
      //
    }
  }

  return (
    <Spin spinning={getPostsPending}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={posts}
        renderItem={({ _id, owner, title, content, picture, tags, createdAt, comments }) => (
          <Card
            headStyle={{ textAlign: 'center', border: 'none' }}
            bodyStyle={{ paddingTop: 0 }}
            style={{ marginBottom: '10px' }}
            title={<Title level={4}>{title}</Title>}
          >
            <List.Item
              key={_id}
              className="home__list-item"
              actions={[
                <Collapse accordion bordered={false} expandIcon={({ isActive }) => <Icon type="message" />}>
                  <Collapse.Panel header={`${comments.length} comments`} style={styles.Panel}>
                    <Row type="flex" gutter={16}>
                      <Col>
                        <Avatar src={picture} />
                      </Col>
                      <Col style={{ width: '90%' }}>
                        <Input.TextArea
                          style={styles.TextArea}
                          rows={1}
                          value={pendingComments[_id]}
                          onChange={e => {
                            handleCommentChange(e, _id)
                          }}
                          onPressEnter={e => {
                            handleCommentEnter(e, _id)
                          }}
                        />
                      </Col>
                    </Row>
                    <List
                      itemLayout="vertical"
                      size="small"
                      dataSource={comments}
                      renderItem={({ owner, content, updatedAt }) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={owner.picture} />}
                            title={<Text strong>{owner.name}</Text>}
                            description={timeDiff(updatedAt)}
                          />
                          {content}
                        </List.Item>
                      )}
                    ></List>
                  </Collapse.Panel>
                </Collapse>,
              ]}
              extra={
                <>
                  {(tags || []).map(t => (
                    <Tag>{t}</Tag>
                  ))}
                </>
              }
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <List.Item.Meta
                avatar={<Avatar src={picture} />}
                title={<Text strong>{owner.name}</Text>}
                description={moment(createdAt).format('LL')}
              />
              <Text>{content}</Text>
            </List.Item>
          </Card>
        )}
      />
    </Spin>
  )
}

const styles = {
  Panel: {
    background: '#ffffff',
    // borderRadius: 4,
    // marginBottom: 24,
    border: 0,
    overflow: 'hidden',
    // borderBottom: '1px',
  },
  TextArea: { border: '1px solid #ccd0d5', borderRadius: '16px', resize: 'none' },
}

HomePage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  getPostsPending: PropTypes.bool.isRequired,
  userId: PropTypes.string,
}

export default connect(
  createStructuredSelector({
    posts: PostSelectors.makeSelectPosts(),
    total: PostSelectors.makeSelectTotal(),
    getPostsPending: PostSelectors.makeSelectGetPostsPending(),
    userId: UserSelectors.makeSelectUserId(),
  }),
  {
    getPosts: PostActions.getPosts,
    createComment: PostActions.createComment,
  },
)(HomePage)
