"use client"
import { apiGetPostById, apiPostComment } from '@/apis/data'
import CommentItem from '@/components/CommentItem'
import { BORDER_COLOR, PRIMARY_COLOR } from '@/styles/color'
import { Avatar } from 'antd'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const formatDate = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const formattedDate = `${month}/${day}/${year}`

    return formattedDate
}

function PostDetail() {

    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const [post, setPost] = React.useState()
    const [comments, setComments] = React.useState([])

    const fetchComment = async (id) => {

        const response = await apiPostComment(id)

        if (response.status === 200) {

            setComments(response.data.data)
        }
    }

    const fetchPost = async () => {

        const response = await apiGetPostById(id)

        if (response.status === 200) {

            setPost(response.data.data)
        }
    }

    React.useEffect(() => {

        fetchPost()
        fetchComment(id)
    }, [])

    return (
        <div className="min-h-screen p-[20px] bg-white rounded-[12px]">
            <div className='px-[20vw]'>
                <div className={`flex items-center text-[14px] mb-[20px] font-bold`} style={{
                    color: PRIMARY_COLOR
                }}>
                    <p>Created at: </p>
                    <p className='ml-[10px]'>{formatDate(post?.createdAt)}</p>
                </div>
                <div className='py-[10px]' style={{
                    borderTop: `1px solid ${BORDER_COLOR}`,
                    borderBottom: `1px solid ${BORDER_COLOR}`
                }}>
                    <h1 className='text-[30px] font-bold text-center'>{post?.title}</h1>
                </div>
                <div className='my-[10px] flex items-start'>
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                            verticalAlign: 'middle',
                        }}
                        size="small"
                    >
                        {post?.owner.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <p className='text-[13px] ml-[10px] text-[#666] font-bold'>{post?.owner.name}</p>
                </div>
            </div>
            <div className='px-[5vw]'>
                <p className='text-justify text-[14px] text-[#333] font-[500] leading-[2]'>
                    {post?.content}
                </p>
                <div className='mt-[20px]' style={{
                    borderTop: `1px solid ${BORDER_COLOR}`
                }}>
                    <p className='py-[20px] font-bold text-[14px]'>
                        {comments?.length} replies
                    </p>
                    {
                        comments?.map(comment => (
                            <CommentItem key={comment._id} comment={comment} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PostDetail