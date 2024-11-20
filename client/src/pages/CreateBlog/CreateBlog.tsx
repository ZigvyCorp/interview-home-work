import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Button, Input, Select } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCallback } from 'react'

import blogsApi from '~/api/blogs.api'
import { BlogAudience } from '~/constants/enum'
import { createBlogSchema, CreateBlogSchema } from '~/utils/rules'
import styles from './CreateBlog.module.scss'

type FormSchema = CreateBlogSchema

const CreateBlog = () => {
  // Form
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue
  } = useForm<FormSchema>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      audience: BlogAudience.Everyone.toString(),
      content: '',
      title: ''
    }
  })

  // Change audience
  const handleChange = useCallback(
    (value: number) => {
      setValue('audience', value.toString())
    },
    [setValue]
  )

  // Mutation: Tạo blog
  const createBlogMutation = useMutation({
    mutationFn: blogsApi.createBlog,
    onSuccess: () => {
      toast.success('Tạo blog thành công')
      reset()
    }
  })

  // Submit form
  const onSubmit = handleSubmit(
    (data) => {
      createBlogMutation.mutate({
        ...data,
        audience: Number(data.audience)
      })
    },
    (error) => {
      console.log('>>> error', error)
    }
  )

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <div className={styles.field}>
          <Select
            defaultValue={BlogAudience.Everyone}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: BlogAudience.Everyone, label: 'Mọi người' },
              { value: BlogAudience.OnlyMe, label: 'Chỉ mình tôi' }
            ]}
          />
        </div>
        <div className={styles.field}>
          <Controller
            control={control}
            name='title'
            render={({ field }) => <Input placeholder='Tiêu đề' {...field} />}
          />
          {errors.title?.message && <p className={styles.error}>{errors.title?.message}</p>}
        </div>
        <div className={styles.field}>
          <Controller
            control={control}
            name='content'
            render={({ field }) => <Input.TextArea placeholder='Nội dung' rows={20} {...field} />}
          />
          {errors.content?.message && <p className={styles.error}>{errors.content?.message}</p>}
        </div>
        <Button htmlType='submit' type='primary' className={styles.submit}>
          Tạo blog
        </Button>
      </form>
    </div>
  )
}

export default CreateBlog
