import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { Button, Form } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import InputText from '../../components/UI/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import AntdTextArea from '../../components/UI/TextArea'
import AntdSelect from '../../components/UI/Select'
import { TAGS } from '../../constant/data'
import { yupResolver } from "@hookform/resolvers/yup";
import { CreatePost } from '../../types/Post/types'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions/postActions'
import { object, string, array } from "yup";

const validatePost = object().shape({
    title: string()
    .required('Please provide title')
    .transform(value => {
        return value.replace(/\s+/g, " ")
    })
    .trim('Please provide title'),
    content: string()
    .required('Please provide content')
    .transform(value => {
        return value.replace(/\s+/g, " ")
    })
    .trim('Please provide content'),
    tags: array().required('Please select at least 1 tags').min(1, 'Please select at least 1 tags')
})

const CreatePostForm = () => {
    const dispatch = useDispatch()
    const { control, handleSubmit, reset } = useForm<any>({
        defaultValues: {
            title: '',
            content: '',
            tags: []
        },
        resolver: yupResolver(validatePost),
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<CreatePost> = (values) => {
        dispatch(createPost(values))
        reset()
    }

    return (
        <DefaultLayout isShowUserList={false}>
            <div
                className='shadow-lg border border-gray-400 p-4 w-[320px] lg:w-[550px] my-32 mx-auto rounded-lg bg-white'
            >
                <Form onFinish={handleSubmit(onSubmit)} layout='vertical'>
                    <FormItem label='Title'>
                        <InputText
                            name='title'
                            control={control}
                        />
                    </FormItem>
                    <FormItem label='Content'>
                        <AntdTextArea
                            size='large'
                            autoSize={{ minRows: 2, maxRows: 6 }}
                            name='content'
                            control={control}
                        />
                    </FormItem>
                    <FormItem label='Tags'>
                        <AntdSelect
                            name='tags'
                            control={control}
                            mode='multiple'
                            values={TAGS}
                            showSearch
                            placeholder='Choose your tags'
                        />
                    </FormItem>
                    <Button loading={false} htmlType='submit'>Create post</Button>
                </Form>
            </div>
        </DefaultLayout>
    )
}

export default CreatePostForm