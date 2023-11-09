import * as z from 'zod'

export const userSchema = z.object({
  email: z.string().email({
    message: 'Địa chỉ email không hợp lệ'
  }),
  password: z.string().min(8, {
    message: 'Mật khẩu phải có ít nhất 8 ký tự'
  })
})

export const loginSchema = userSchema.pick({
  email: true,
  password: true
})

export type LoginSchema = z.infer<typeof loginSchema>
