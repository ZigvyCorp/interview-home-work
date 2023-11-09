import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import isEmpty from 'lodash/isEmpty'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import userApi from '~/api/users.api'
import PATH from '~/constants/path'
import { AppContext } from '~/providers/AppProvider/AppProvider'
import { ErrorResponse } from '~/types/utils.type'
import { LoginSchema, loginSchema } from '~/utils/rules'
import { isEntityError } from '~/utils/utils'
import styles from './Login.module.scss'

type FormSchema = LoginSchema

const Login = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)

  // Form
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError
  } = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // Mutation: Đăng nhập
  const loginMutation = useMutation({
    mutationFn: userApi.login,
    onSuccess: (data) => {
      const { user } = data.data.data
      setIsAuthenticated(true)
      setProfile(user)
      toast.success('Đăng nhập thành công')
    },
    onError: (error) => {
      if (isEntityError<ErrorResponse<FormSchema>>(error)) {
        const formErrors = error.response?.data.data
        if (!isEmpty(formErrors)) {
          Object.keys(formErrors).forEach((key) => {
            setError(key as keyof FormSchema, {
              type: 'Server',
              message: formErrors[key as keyof FormSchema]
            })
          })
        }
      }
    }
  })

  // Submit form
  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data)
  })

  return (
    <div className={styles.wrapper}>
      <h2>Đăng nhập</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.field}>
          <Controller control={control} name='email' render={({ field }) => <Input placeholder='Email' {...field} />} />
          {errors.email?.message && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
          <Controller
            control={control}
            name='password'
            render={({ field }) => <Input.Password placeholder='Mật khẩu' {...field} />}
          />
          {errors.password?.message && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <Button htmlType='submit' type='primary' className={styles.submit}>
          Đăng nhập
        </Button>
        <p className={styles.suggest}>
          Bạn chưa có tài khoản? <Link to={PATH.REGISTER}>Đăng ký ngay</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
