import React from 'react'
import { Row, Col, Tag, Collapse, Space } from 'antd'
import CommentItem from './CommentItem'

const { Panel } = Collapse;

const style = {
  padding: '40px 10%',
  backgroundColor: '#fff',
  height: '100%',
  position: 'absolute',
  marginBotton: '20px'
}

export default class PostDetail extends React.Component {
  componentDidMount() {
    const { fetchPostDetail, match: { params: { id }} } = this.props
    fetchPostDetail(id)
  }

  render() {
    const { post, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>
    } else if (post) {
      const {
        title,
        content,
        tags = [],
        comments = [],
        users = {},
        createdAt
      } = post
      const { name } = users
      return (
        <div style={style}>
          <Row align='center'><h4 style={{fontSize: '36px'}}>{title}</h4></Row>
          <Row>
            <Col span={18}>
              <div>Author: {name}</div>
              <div>Created at: {new Date(createdAt).toDateString()}</div>
            </Col>
            <Col span={6}>
              {tags.map((tag) => <Tag key={tag.value} color={tag.color}>{tag.value}</Tag>)}
            </Col>
          </Row>
          <Row>
            <p style={{textAlign: 'justify', textJustify: 'inter-word', marginTop: '20px'}}>{content}</p>
          </Row>
          <Collapse defaultActiveKey={[1]}>
            <Panel header={`${comments.length} comments`} key={1}>
              {comments.length > 0 ? comments.map((comment) => <CommentItem key={comment.id} comment={comment}/>) : 'No comments yet'}
            </Panel>
          </Collapse>
          <div style={{height: '60px'}}/>
        </div>
      )
    }
  }
}