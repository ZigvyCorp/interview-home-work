import { Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { debounce } from 'lodash'
import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { GET_POSTS } from '../../../redux/saga/action'
import { IPayloadGetPosts } from '../../../redux/saga/post/model'

const FormSearchPost = ({ page, pageSize }: { page: number, pageSize: number }) => {
    const [form] = useForm()
    const dispatch = useDispatch()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: GET_POSTS,
            payload: {
                _limit: pageSize,
                page: page,
                title: e.target.value
            } as IPayloadGetPosts
        })
    }

    const debounceOnchange = React.useCallback(debounce(onChange, 500), [])

    return (
        <Form layout={'vertical'} form={form}>
            <Form.Item name={'post'} label="Search">
                <Input onChange={debounceOnchange} allowClear placeholder='Post title...' />
            </Form.Item>
        </Form>
    )
}

export default FormSearchPost
