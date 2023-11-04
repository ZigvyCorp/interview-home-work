import React from 'react'
import { CommentResponse } from '../../interfaces/response/CommentResponse'
import LineBreak from '../LineBreak'
import SingleComment from '../Post/Comment/SingleComment'
import TextArea from 'antd/es/input/TextArea'
import { Button } from 'antd'

interface AllCommentsProps {
    comments: CommentResponse[]
}

const AllComments: React.FC<AllCommentsProps> = (props) => {

    const { comments } = props

    return (
        <>
            <LineBreak className='mb-6' />
            <div className='mb-6'>
                <span className='font-semibold text-gray-700'>Add your comment:</span>
                <TextArea rows={3} />
                <div className='flex justify-end mt-2'>
                    <Button className='px-8 h-[38px] bg-primary'>
                        <span className='font-semibold text-white'>Submit</span>
                    </Button>
                </div>
            </div>
            <div className='max-h-[250px] overflow-y-auto'>
                {comments.map((comment, index) => <SingleComment key={index} index={index} data={comment} size={comments.length} />)}
            </div>
        </>
    )
}

export default AllComments