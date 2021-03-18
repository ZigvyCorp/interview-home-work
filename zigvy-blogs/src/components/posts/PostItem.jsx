import React from 'react'
import { Row, Col, Tag, Collapse } from 'antd'
import CommentItem from './CommentItem'
import { withRouter } from 'react-router-dom';

const { Panel } = Collapse;

const style = {
  backgroundColor: '#fff',
  padding: '30px 35px',
  borderRadius: '5px',
  boxShadow: '0 0px 2px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  width: '100%',
  cursor: 'pointer'
}

function PostItem({history, post: { id, title, content, user: { name }, comments = [], tags = [], createdAt } }) {
  return (
    <div style={style}>
      <div onClick={(e) => history.push(`/detail/${id}`)}>
        <Row align='center'><h4 style={{fontSize: '18px'}}>{title}</h4></Row>
        <Row>
          <Col span={18}>
            <div>Author: {name}</div>
            <div>Created at: {new Date(createdAt).toDateString()}</div>
          </Col>
          <Col span={6}>
            <Row gutter={[10, 10]}>
              {tags.map((tag) => <Tag key={tag.value} color={tag.color}>{tag.value}</Tag>)}
            </Row>
          </Col>
        </Row>
        <Row>
          <p style={{textAlign: 'justify', textJustify: 'inter-word', marginTop: '20px'}}>{content.substr(0, 1500)}...</p>
        </Row>
      </div>
      <Collapse>
        <Panel header={`${comments.length} comments`} key="1">
          {comments.length > 0 ? comments.map((comment) => <CommentItem key={comment.id} comment={comment}/>) : 'No comments yet'}
        </Panel>
      </Collapse>
    </div>
  )
} 

export default withRouter(PostItem)