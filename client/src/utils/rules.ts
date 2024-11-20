import * as z from 'zod'
import { BlogAudience } from '~/constants/enum'

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Địa chỉ email không hợp lệ'
  }),
  password: z.string().min(8, {
    message: 'Mật khẩu phải có ít nhất 8 ký tự'
  })
})

export const registerSchema = z
  .object({
    email: z.string().email({
      message: 'Địa chỉ email không hợp lệ'
    }),
    password: z.string().min(8, {
      message: 'Mật khẩu phải có ít nhất 8 ký tự'
    }),
    confirm_password: z.string()
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Mật khẩu không khớp',
    path: ['confirm_password']
  })

export const createBlogSchema = z.object({
  title: z.string().min(1, {
    message: 'Tiêu đề phải có ít nhất 1 ký tự'
  }),
  content: z.string().min(1, {
    message: 'Nội dung phải có ít nhất 50 ký tự'
  }),
  audience: z.enum([BlogAudience.Everyone.toString(), BlogAudience.OnlyMe.toString()])
})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
export type CreateBlogSchema = z.infer<typeof createBlogSchema>
