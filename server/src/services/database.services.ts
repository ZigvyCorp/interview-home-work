import { Collection, Db, MongoClient } from 'mongodb';

import { ENV_CONFIG } from '~/constants/config';
import Blog from '~/models/schemas/Blog.schema';
import RefreshToken from '~/models/schemas/RefreshToken.schema';
import User from '~/models/schemas/User.schema';

const uri = `mongodb+srv://${ENV_CONFIG.DB_USERNAME}:${ENV_CONFIG.DB_PASSWORD}@zigvycorp-interview-clu.3ufrpvw.mongodb.net/?retryWrites=true&w=majority`;

class DatabaseService {
  private client: MongoClient;
  private db: Db;

  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(ENV_CONFIG.DB_NAME);
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 });
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  get users(): Collection<User> {
    return this.db.collection(ENV_CONFIG.DB_USERS_COLLECTION);
  }

  get refresh_tokens(): Collection<RefreshToken> {
    return this.db.collection(ENV_CONFIG.DB_REFRESH_TOKENS_COLLECTION);
  }

  get blogs(): Collection<Blog> {
    return this.db.collection(ENV_CONFIG.DB_BLOGS_COLLECTION);
  }
}

const databaseService = new DatabaseService();
export default databaseService;
