export interface PostType {
  userId: number
  id: number
  title: string
  body: string
  userName?: string
}

export default class Post {
  userId: number
  id: number
  title: string
  body: string
  userName?: string
  constructor(post: PostType) {
    this.userId = post.userId
    this.id = post.id
    this.title = post.title
    this.body = post.body
    this.userName = post.userName
  }
}
