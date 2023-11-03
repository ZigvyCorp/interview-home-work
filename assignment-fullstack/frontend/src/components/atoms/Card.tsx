import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usersApi } from '../../api/users'
import { commentsApi } from '../../api/comments'
import { formatDate } from '../../utils/common-func'
import { Card as CardLib } from 'antd'

type CardProps = {
    _id: string
    loading?: boolean
    title: string
    owner: string
    content: string
    created_at: number
    comments?: []
}

type User = {
    username: string
    name?: string
}

type Comments = {
    content: string
    owner: string
    created_at: number
}

const Card: React.FC<CardProps> = ({ loading, ...props }) => {
    const [user, setUser] = useState<User | null>(null)
    const [comments, setComments] = useState<Comments[]>([])
    const [showComment, setShowComment] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const user = await usersApi.getUser(props.owner)
            setUser(user.data)
            const comments = await commentsApi.getComments(props._id)
            setComments(comments.data)
        }
        fetchData()
    }, [props._id])

    return (
        <CardLib
            style={{ width: '100%', marginBottom: '16px', cursor: 'pointer' }}
            loading={loading}
            onClick={() => {
                navigate(`${props._id}`, { state: { post: props } })
            }}
        >
            <div className="card">
                <h2>{props.title}</h2>
                <div className="middle">
                    <div>
                        <span>Author: {user?.username}</span>
                        <span>
                            Created at: {formatDate(new Date(props.created_at))}
                        </span>
                    </div>
                    <div></div>
                </div>
                <p>{props.content}</p>
            </div>
            <hr />
            <div
                onClick={() => setShowComment(!showComment)}
                style={{ cursor: 'pointer' }}
            >
                {comments.length} replies
                {showComment && (
                    <>
                        {comments.map((comment, idx) => (
                            <div key={idx} className="comment">
                                <div className="info">
                                    <span>BenJD1205</span>
                                    <span>
                                        {formatDate(
                                            new Date(comment.created_at)
                                        )}
                                    </span>
                                </div>
                                <div className="content">
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </CardLib>
    )
}

export default Card
