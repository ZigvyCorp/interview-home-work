import { config } from 'dotenv'
import dataBaseService from './database.services'
config()

class PostService {
  async getAllPost() {
    const rs = await dataBaseService.post.find().toArray()
    return rs
  }
  async getPostById({ postId }: { postId: number }) {
    const rs = await dataBaseService.post.findOne({ id: postId })
    return rs
  }
}

export const postService = new PostService()
