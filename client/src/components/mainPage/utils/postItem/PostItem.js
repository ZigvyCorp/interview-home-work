import { Col, Row, Tag, Comment, List } from 'antd'
import Title from 'antd/lib/typography/Title'
import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';

function PostItem(props) {
    const {post, users, comments } = props;
    const commentsOfPost = comments.filter(comment=>comment.postId === post._id );
    const userOfPost = users.filter(user=>user._id===post.userId);
    if(!post&&commentsOfPost.length===0&&!userOfPost) return (<h1>Loading..</h1>)
    return (
        <div className="post-item">
            <Link to={`/posts/${post._id}`}><Title style={{textAlign:'center'}}>{post.title}</Title></Link>
            <Row>
                <Col span={12}>
                    {
                        userOfPost.map(user=>(
                            <div className='info'>
                                <Title level={4} style={{color:'red'}}>{user.name}</Title>
                                <Title level={5} style={{color:'red'}}>{moment(post.createdAt).format('DD-MM-YYYY')}</Title>
                            </div>
                        ))
                    }
                </Col>
                <Col span={12}>
                    <div className='tag'>
                    <Tag color="red">red</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="red">red</Tag>
                    </div>
                </Col>
            </Row>
            <div className="description">
                <Title level={5}>
                    {
                        post.body
                    }
                </Title>
            </div>
            <div className='comment'>
            <List
                className="comment-list"
                header={`${commentsOfPost.length} Bình luận`}
                itemLayout="horizontal"
                dataSource={commentsOfPost}
                renderItem={comment => (
                <li>
                    <Comment
                    author={comment.name}
                    avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    content={comment.body}
                    />
                </li>
                )}
            />
            </div>
        </div>
    )
}

export default PostItem
