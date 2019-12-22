import React, { Component } from 'react';
import { Typography, Row, Col, Tag, Comment, Tooltip, List } from 'antd';
import { get as _get } from 'lodash';
import moment from 'moment';
import './ShortPost.css';

const { Title } = Typography;

const COLOR_LIST = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
class ShortPost extends Component {
  state = {
    showComment: false,
  }
  toggleShowComment = () => {
    console.log('abcd');
    this.setState({
      showComment: !this.state.showComment
    })
  }

  render() {
    const {
      title,
      author,
      createdAt,
      tags,
      shortContent,
      comments,
    } = this.props;
    const renderComment = comments.map(comment => ({
      id: _get(comment, 'id', ''),
      author: _get(comment, 'user.name', ''),
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          {_get(comment, 'comment', '')}
        </p>
      ),
      datetime: comment.createdAt ? (
        <Tooltip
          title={moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}
          </span>
        </Tooltip>
      ) : null,
    }))

    const formatedCreatedDate = moment(createdAt).format('ll');

    return (
      <div className="short-post">
        <Title className="short-post--title">{title}</Title>
        <Row className="short-post--infor">
          <Col span={8}>
            <div>Author: {author}</div>
            <div>Created at: {formatedCreatedDate}</div>
          </Col>
          <Col span={8} offset={8}>
            {tags.map((tag, index) => <Tag color={COLOR_LIST[index % COLOR_LIST.length]} key={tag}>{tag}</Tag>)}
          </Col>
        </Row>
        <Row>
          <Col span={24} className="short-post--description">
            {shortContent}
          </Col>
        </Row>
        <List
          className="comment-list"
          header={(<span onClick={this.toggleShowComment} className="toggle-reply">{renderComment.length} replies</span>)}
          itemLayout="horizontal"
          dataSource={renderComment}
          rowKey={renderComment.id}
          renderItem={item => this.state.showComment ? (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          ) : (<span></span>)}
        />
      </div>
    );
  }
}

export default ShortPost;