import React from 'react'
import CommentItem from '../CommentItem'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputText from '../../UI/Input'
import { SendOutlined } from "@ant-design/icons"
import { Empty, Form } from 'antd'
import { CreateComment } from '../../../types/Comment/types'
import { useDispatch, useSelector } from 'react-redux'
import { selectComment } from '../../../redux/reducer/commentReducer'
import { createComment } from '../../../redux/actions/commentActions'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

const schema = Yup.object().shape({
  content: Yup.string().required('Content is required'),
});

const CommentList = ({ postId }: { postId: number }) => {
    const comments = useSelector(selectComment)
    const dispatch = useDispatch()
    const { control, handleSubmit, resetField } = useForm<CreateComment>({
        defaultValues: {
            content: ''
        },
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<CreateComment> = (values) => {
        dispatch(createComment(postId, values))
        resetField('content')
    }
    const [form] = Form.useForm()
    const commentByPost = comments[`postId - ${postId}`]
    return (
        <div >
            <div className='h-[200px] overflow-y-auto mb-2'>
                {(Array.isArray(commentByPost) && commentByPost.length > 0) ?
                    commentByPost.map(comment => <CommentItem key={comment.commentId} {...comment} />) :
                    <Empty />
                }
            </div>
            <Form form={form} onFinish={handleSubmit(onSubmit)}>
                <InputText
                    name='content'
                    control={control}
                    suffix={<SendOutlined className="ml-2 text-lg cursor-pointer" onClick={() => form.submit()} />}
                />
            </Form>
        </div>
    )
}

export default CommentList
