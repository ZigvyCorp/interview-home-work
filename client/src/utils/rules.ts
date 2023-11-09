import * as z from 'zod'

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

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
