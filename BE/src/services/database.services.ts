import { config } from 'dotenv'
import { Collection, Db, MongoClient } from 'mongodb'
import Comment from '~/models/schemas/Comment.schema'
import Post from '~/models/schemas/Post.schema'
import User from '~/models/schemas/User.schema'
config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@interview.hrxjxud.mongodb.net/
`

class DataBaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('connected to mongodb')
    } catch (error) {
      console.log('connect MongoDB error:', error)
    }
  }
  get user(): Collection<User> {
    return this.db.collection(process.env.DB_USER_COLLECTION as string)
  }
  get post(): Collection<Post> {
    return this.db.collection(process.env.DB_POST_COLLECTION as string)
  }
  get comment(): Collection<Comment> {
    return this.db.collection(process.env.DB_COMMENT_COLLECTION as string)
  }
}

const dataBaseService = new DataBaseService()

export default dataBaseService
