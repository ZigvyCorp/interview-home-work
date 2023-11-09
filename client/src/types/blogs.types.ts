// Type: Blog
export interface Blog {
  _id: string
  user_id: string
  title: string
  content: string
  view_count: number
  like_count: number
  audience: number
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
