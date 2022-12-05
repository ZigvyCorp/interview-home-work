import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import { Tag, Divider, Typography, Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';
const { Title } = Typography;

const PostItem = ({ data }) => {
    const tagColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
    const own = useSelector(state => state.user.userList.find(f => f.id === data.owner)) || null
    let name = (own?.name?.length > 0 ? own?.name : own?.username) || ''

  return (
    <div className='post-item'>
        <Divider orientation="left"><Title level={3}>{data && data.title}</Title></Divider>
        <Row>
            <Col span={8}>
                  <p className="author"><b>Author: </b>{name}</p>
                  <p className="create-at"><b>Create at: </b>{(new Date(data.created_at)).toLocaleDateString()}</p>
            </Col>
            <Col span={10} offset={6}>
                {data.tags.map((tag, i) =>
                    <Tag
                        color={tagColors[Math.floor(Math.random() * tagColors.length)]}
                        key={`${i}-${tag}`}
                    >
                        {tag}
                    </Tag>
                )}
            </Col>
        </Row>
        <p className="summary">
            {data && data.content.substring(0, 100) + ' ...'}
            <Link to={`post/${data.id}`}>
                <Button type="link">Đọc thêm</Button>
            </Link>
        </p>
        <CommentList postId={data.id} />
    </div>
  )
}

export default PostItem