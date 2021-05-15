import { Col, Comment, Row, Tag, List } from 'antd';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { commentsState$, postsState$, usersState$ } from '../../../redux/selectors';
function DetailPost() {
    const idPost = useParams().id;
    const posts = useSelector(postsState$);
    const users = useSelector(usersState$);
    const comments = useSelector(commentsState$);
    console.log(posts,users);
    
    const post ={...posts.filter(post=>post._id===idPost)[0]} ;
    const userOfPost = users.filter(user=>user._id===post.userId);
    const commentsOfPost = comments.filter(comment=>comment.postId===idPost);
    return (
    <div className="post-item">
           <Title style={{textAlign:'center'}}>{post.title}</Title>
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

export default DetailPost;
