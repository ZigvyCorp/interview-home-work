import { Button, Form, Typography, notification } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { useEffect } from 'react'
import InputText from '../../components/UI/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputPassword from '../../components/UI/InputPassword'
import { Login } from '../../types/User/types'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/userActions'
import { selectIsAuthenticated } from '../../redux/reducer/userReducer'
import { Navigate, useLocation } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const { Title } = Typography

const validateLoginForm = object<Login>({
    userName: string()
    .required('Please provide user name')
    .transform(value => {
        return value.replace(/\s+/g, " ")
    })
    .trim('Please provide user name'),
    password: string()
    .required('Please provide password')
    .transform(value => {
        return value.replace(/\s+/g, " ")
    })
    .trim('Please provide password'),
})

const LoginPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const from = location.state?.from?.pathname || "/";
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const { control, handleSubmit } = useForm<any>({
        defaultValues: {
            userName: '',
            password: ''
        },
        resolver: yupResolver(validateLoginForm),
        mode: 'onBlur'
    })

    useEffect(() => {
        if(isAuthenticated) {
            notification.success({
                message: 'Successfully login'
            })
        }
    }, [isAuthenticated])

    const onSubmit: SubmitHandler<Login> = (values) => {
        dispatch(login(values))
    }

    if(isAuthenticated) {
        return <Navigate to={from} replace/>
    }
    
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='shadow-lg border border-gray-400 p-4 w-[320px] rounded-lg bg-white'>
                <Title className='text-center'>Login</Title>
                <Form onFinish={handleSubmit(onSubmit)} layout='vertical'>
                    <FormItem label='Username'>
                        <InputText control={control} name='userName' />
                    </FormItem>
                    <FormItem label='Password'>
                        <InputPassword control={control} name='password' />
                    </FormItem>
                    <div className='flex justify-center'>
                        <Button htmlType='submit'>Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage