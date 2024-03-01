import { Avatar } from 'antd'
import React from 'react'

function CommentItem({ comment }) {
    return (
        <div className='flex items-start mb-[20px]'>
            <div className='mr-[10px]'>
                <Avatar
                    style={{
                        backgroundColor: '#f56a00',
                        verticalAlign: 'middle',
                    }}
                    size="large"
                >
                    {comment.owner.name.charAt(0).toUpperCase()}
                </Avatar>
            </div>
            <div>
                <div className='flex items-center text-[14px] text-[#aeaeae]'>
                    <p>{comment.owner.name}</p>
                </div>
                <p className='text-[14px] text-[#666] my-[10px]'>
                    {comment.content}
                </p>
                <p className='text-[14px] text-[#aeaeae] cursor-pointer'>Reply to</p>
            </div>
        </div>
    )
}

export default CommentItem