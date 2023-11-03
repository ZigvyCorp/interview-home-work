import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { formatDate } from 'utils/common-func'
import { Card } from 'antd'

type Post = {
    title: string
    owner: string
    content: string
    created_at: number
    comments?: []
}

const PostDetail = () => {
    const [post, setPost] = useState<Post | null>(null)
    const { id } = useParams()
    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            setPost(location.state.post)
        }
    }, [id])

    return (
        <Card style={{ marginTop: 64 }}>
            <h1>{post?.title}</h1>
            <div className="postDetail">
                <span>
                    Create At:{' '}
                    {formatDate(new Date(post?.created_at as number))}
                </span>
                <span>{post?.content}</span>
            </div>
        </Card>
    )
}

export default PostDetail
