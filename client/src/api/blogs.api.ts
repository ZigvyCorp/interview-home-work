import { CreateBlogReqBody, CreateBlogResponse, GetBlogsResponse } from '~/types/blogs.types'
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
  }
}

export default blogsApi
