export interface Post {
  _id: string
  title: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
  comments: Comment[]
  ownerName: string
}

export interface Comment {
  _id: string
  content: string
  owner: {
    _id: string
    name: string
  }
  post: string
  createdAt: string
  updatedAt: string
}

export interface PostState {
  posts: Post[]
  pagination: PaginationInfo
  currentPost: Post | null
  isLoading: boolean
  error: string | null
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalPosts: number
  limit: number
}

export interface GetPostsParams {
  page?: number
  limit?: number
}

export interface GetPostsResponse extends PaginationInfo {
  success: boolean
  posts: Post[]
}

export interface GetPostByIdResponse {
  success: boolean
  post: Post
}
