import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Tag, Comment, Tooltip } from 'antd'
import moment from 'moment'
import { reqGetAllPosts } from './redux'

const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan']
let tagLen = colors.length

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)
const renderTag = tags => {
  if (tags) {
    tagLen = tags.length > colors ? tagLen : tags.length
    let result = []

    for (let i = 0; i < tagLen; i++) {
      result.push(
        <Tag key={tags[i]} color={colors[i]}>
          {tags[i]}
        </Tag>
      )
    }
    return result
  }
}
const Home = props => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // effect
    props.reqGetAllPost()

    return () => {
      // cleanup
    }
  }, [])

  useEffect(() => {
    setPosts(props.posts)
    return () => {
      // cleanup
    }
  }, [props.posts])
  return (
    <React.Fragment>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: page => {
            console.log(page)
          },
          pageSize: 5,
        }}
        dataSource={posts}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type='star-o' text='156' key='list-vertical-star-o' />,
              <IconText type='like-o' text='156' key='list-vertical-like-o' />,
              <IconText type='message' text='2' key='list-vertical-message' />,
              <IconText type='edit' key='list-vertical-message' />,
            ]}
            extra={<img width={272} alt='logo' src={item.img} />}
          >
            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={item.title} description={item.description} />

            <div>{renderTag(item.tags)}</div>
            {item.content.substring(0, 300)}
          </List.Item>
        )}
      />
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.home.allPosts,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    reqGetAllPost: () => {
      dispatch(reqGetAllPosts())
    },
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
