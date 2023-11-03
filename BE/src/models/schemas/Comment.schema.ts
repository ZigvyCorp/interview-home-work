export interface CommentType {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

export default class Comment {
  body: string
  email: string
  id: number
  name: string
  postId: number
  constructor(comment: CommentType) {
    this.body = comment.body
    this.email = comment.email
    this.id = comment.id
    this.name = comment.name
    this.postId = comment.postId
  }
}
