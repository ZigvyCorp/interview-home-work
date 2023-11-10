import { Pagination, SuccessResponse } from './utils.type'

interface Author {
  _id: string
  email: string
  firstName: string
  lastName: string
  gender: number
  status: number
  role: number
  date_of_birth: string
  created_at: string
  updated_at: string
}

// Type: Blog
export interface Blog {
  _id: string
  author: Author
  title: string
  content: string
  view_count: number
  like_count: number
  comment_count: number
  audience: number
  created_at: string
  updated_at: string
}

// Type: Comment
export interface Comment {
  _id: string
  content: string
  author: Author
  created_at: string
  updated_at: string
}

// Request: Tạo blog
export interface CreateBlogReqBody {
  title: string
  content: string
  audience: number
}

// Response: Tạo blog
export interface CreateBlogResponse {
  blog: Blog
}

// Response: Lấy danh sách blog
export type GetBlogsResponse = SuccessResponse<{
  blogs: Blog[]
  pagination: Pagination
}>

// Response: Lấy danh sách comment
export type GetCommentsResponse = SuccessResponse<{
  comments: Comment[]
  pagination: Pagination
}>

// Response: Tạo comment
export type CreateCommentResponse = SuccessResponse<{
  comment: Comment
}>
