import React, { useEffect, useState } from 'react'
import { apiGetPostComments } from '../../services/postService'
import { Avatar, List, Button } from 'antd';
import { Comment } from '@ant-design/compatible';
import formatDate from '../../utils/formatDate';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([])
    const [isShowComment, setIsShowComment] = useState(false)
    useEffect(() => {
        setIsShowComment(false)
        const getComments = async () => {
            const comments = await apiGetPostComments(postId)
            setComments(comments.data.data)
        }
        getComments()
    }, [postId])
    return (
        <div className='comment-section'>
            <List
                className="comment-list"
                header={`${comments.length} replies`}
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={item => isShowComment && (
                    <li>
                        <Comment
                            actions={<span key="comment-basic-reply-to">Reply to</span>}
                            author={
                                <a>Han Solo</a>
                            }
                            avatar={
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                />
                            }
                            content={
                                <p>
                                    {item.body}
                                </p>
                            }
                            datetime={
                                <span>{formatDate(item.createAt)}</span>
                            }
                        />
                    </li>
                )}
            />
            <Button onClick={() => setIsShowComment(prev => !prev)}>
                {isShowComment ? "Collapse Comment" : "Show Comment"}
            </Button>
        </div>
    )
}

export default CommentSection