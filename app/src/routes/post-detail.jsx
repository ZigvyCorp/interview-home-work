import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost, getComments } from '../services'

import { Avatar, Tag } from "antd"

import { get, omit, set } from 'lodash'
import { timeSince } from '../utils'
import { Divider, Button } from 'antd'
import Comment from '../components/Comment'

export default function PostDetail() {
    const postId = useParams().postId
    const [post, setPost] = useState({})
    const [comments, setComments] = useState({
        data: [],
        loading: false,
        hasNext: false
    })
    useEffect(() => {
        getPost(postId).then(res => {
            setPost(omit(res, ['comments', 'hasNextComment']))
            setComments({
                data: get(res, ['comments'], []),
                loading: false,
                hasNext: get(res, ['hasNextComment'], false)
            })
        })
    }, [postId])

    const fetchComments = async () => {
        setComments(prev => ({ ...prev, loading: true }))
        const res = await getComments(postId, comments.data.length)
        setComments(prev => ({
            data: [...prev.data, ...res.data],
            loading: false,
            hasNext: res.hasNext
        }))
    }

    return <div className='mt-4 pt-4 pb-10'>
        <h1 className='my-4 text-xl font-semibold'>{post.title}</h1>
        {post.tags?.map(t => <Tag key={t} className='mx-1'>{t}</Tag>)}
        <div className='flex items-center mt-8'>
            <Avatar>{get(post, ['owner', 'name', 0], '')}</Avatar>
            <div className='ml-4'>
                <p className='font-semibold'>{post?.owner?.name}</p>
                <span className='text-gray-400'>{timeSince(new Date(post.created_at))}</span>
            </div>
        </div>

        <div className='mt-4 text-lg'>
            {post.content}
        </div>
        <Divider />
        <div className='space-y-8 ml-8'>
            {comments.data?.map(c => <Comment key={c._id} comment={c} />)}
        </div>

        {
            comments.hasNext &&
            <div className='flex justify-center mt-8'>
                <Button
                    loading={comments.loading}
                    onClick={fetchComments}
                >Load more</Button>
            </div>
        }
    </div>
}