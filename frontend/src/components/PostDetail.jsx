import React from 'react';
import { useSelector } from 'react-redux';
import { Divider, Tag, Typography,  } from 'antd';
import CommentList from './CommentList';
const { Title } = Typography;
const PostDetail = ({ data }) => {
  const tagColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
  const own = useSelector(state => state.user.userList.find(f => f.id === data.owner))
  return (
    <div className='post-detail'>

      <Divider orientation="left"><Title level={3}>{data && data.title}</Title></Divider>
      <p className="content">
        {data && data.content}
      </p>

      <Divider orientation="left"><Title level={5}>Thông tin bài viết:</Title></Divider>
      <p className="author"><b>Author: </b>{own && own.name.length > 0 ? own.name : own.username}</p>
      <p className="create-at"><b>Create at: </b>{(new Date(data.created_at)).toLocaleDateString()}</p>
      <p className="tags"><b>Tags: </b>{data.tags.map((tag, i) =>
        <Tag
          color={tagColors[Math.floor(Math.random() * tagColors.length)]}
          key={`${i}-${tag}`}
        >
          {tag}
        </Tag>
      )}</p>

      <Divider orientation="left"><Title level={5}>Bình luận:</Title></Divider>
      <CommentList postId={data.id} />
    </div>
  )
}

export default PostDetail