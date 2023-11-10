import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import isEmpty from 'lodash/isEmpty'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import userApi from '~/api/users.api'
import { AppContext } from '~/providers/AppProvider/AppProvider'
import { ErrorResponse } from '~/types/utils.type'
import { registerSchema, RegisterSchema } from '~/utils/rules'
import { isEntityError } from '~/utils/utils'
import styles from './Register.module.scss'

type FormSchema = RegisterSchema

const Register = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)

  // Form
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError
  } = useForm<FormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    }
  })

  // Mutation: Đăng ký
  const registerMutation = useMutation({
    mutationFn: userApi.register,
    onSuccess: (data) => {
      const { user } = data.data.data
      setIsAuthenticated(true)
      setProfile(user)
      toast.success('Đăng ký thành công')
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
    registerMutation.mutate(data)
  })

  return (
    <div className={styles.wrapper}>
      <h2>Đăng ký</h2>
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
        <div className={styles.field}>
          <Controller
            control={control}
            name='confirm_password'
            render={({ field }) => <Input.Password placeholder='Nhập lại mật khẩu' {...field} />}
          />
          {errors.confirm_password?.message && <p className={styles.error}>{errors.confirm_password.message}</p>}
        </div>
        <Button htmlType='submit' type='primary' className={styles.submit}>
          Đăng ký
        </Button>
      </form>
    </div>
  )
}

export default Register
