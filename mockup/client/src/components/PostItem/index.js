"use client"
import { apiPostComment } from '@/apis/data'
import { BORDER_COLOR, PRIMARY_COLOR } from '@/styles/color'
import { DownOutlined, RightOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'
import CommentItem from '../CommentItem'
import style from './style.module.css'

const formatDate = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const formattedDate = `${month}/${day}/${year}`

    return formattedDate
}

function PostItem({ post }) {

    const [openTabComment, setOpenTabComment] = React.useState(false)
    const [comments, setComments] = React.useState([])

    const fetchComment = async (id) => {

        const response = await apiPostComment(id)

        if (response.status === 200) {

            setComments(response.data.data)
        }
    }

    const handleToggle = () => {

        setOpenTabComment(prev => !prev)
    }

    React.useEffect(() => {

        fetchComment(post._id)
    }, [])

    return (
        <div className='bg-white p-[20px] rounded-[12px] mb-[20px]'>
            <Link
                href={`/post-detail?id=${post._id}`}
                style={{
                    color: PRIMARY_COLOR
                }}
                className='text-center block text-[26px] font-serif cursor-pointer hover:underline'>
                {post.title}
            </Link>
            <div className='font-[500] text-[#333] text-[14px]'>
                <div className='flex items-center'>
                    <p>Author: </p>
                    <p className='ml-[10px]'>{post.owner.name}</p>
                </div>
                <div className='flex items-center'>
                    <p>Created at: </p>
                    <p className='ml-[10px]'>{formatDate(post.createdAt)}</p>
                </div>
            </div>
            <p className={style.content}>
                {post.content}
            </p>
            <div
                style={{
                    borderTop: `1px solid ${BORDER_COLOR}`
                }}
                className='mt-[20px]'>
                {
                    comments.length > 0 &&
                    <div
                        style={{
                            color: PRIMARY_COLOR
                        }}
                        onClick={handleToggle}
                        className='py-[10px] flex items-center text-[#333] cursor-pointer w-max'
                    >
                        <p className='mr-[10px] text-[14px]'>{comments.length} replies</p>
                        {
                            openTabComment
                                ?
                                <DownOutlined className='text-[14px]' />
                                :
                                <RightOutlined className='text-[14px]' />
                        }
                    </div>
                }
                {
                    openTabComment &&
                    <div className='mt-[20px]'>
                        {
                            comments.map(comment => (
                                <CommentItem key={comment._id} comment={comment} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default PostItem