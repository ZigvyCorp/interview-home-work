import {
  CreateBlogReqBody,
  CreateBlogResponse,
  GetBlogsResponse,
  GetCommentsResponse,
  CreateCommentResponse,
  GetBlogResponse
} from '~/types/blogs.types'
import { PaginationReqQuery } from '~/types/utils.type'
import http from '~/utils/http'

const blogsApi = {
  // Tạo blog
  createBlog: (body: CreateBlogReqBody) => {
    return http.post<CreateBlogResponse>('/blogs', body)
  },

  // Lấy danh sách blog
  getBlogs: (query: PaginationReqQuery) => {
    return http.get<GetBlogsResponse>('/blogs', { params: query })
  },

  // Lấy chi tiết blog
  getBlog(blog_id: string) {
    return http.get<GetBlogResponse>(`/blogs/${blog_id}`)
  },

  // Lấy danh sách comment
  getComments: ({ blog_id, query }: { blog_id: string; query?: PaginationReqQuery }) => {
    return http.get<GetCommentsResponse>(`/comments/blog/${blog_id}`, { params: query })
  },

  // Tạo comment
  createComment: ({ blog_id, content }: { blog_id: string; content: string }) => {
    return http.post<CreateCommentResponse>(`/comments/blog/${blog_id}`, { content })
  }
}

export default blogsApi
