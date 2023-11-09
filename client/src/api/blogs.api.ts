import { CreateBlogReqBody, CreateBlogResponse } from '~/types/blogs.types'
import http from '~/utils/http'

const blogsApi = {
  // Tạo blog
  createBlog: (body: CreateBlogReqBody) => {
    return http.post<CreateBlogResponse>('/blogs', body)
  }
}

export default blogsApi
