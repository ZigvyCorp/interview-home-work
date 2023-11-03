import { config } from 'dotenv'
import dataBaseService from './database.services'
config()

class CommentService {
  async getCommentsByPostId({ postId }: { postId: number }) {
    const rs = await dataBaseService.comment.find({ postId }).toArray()
    return rs
  }
}

export const commentService = new CommentService()
