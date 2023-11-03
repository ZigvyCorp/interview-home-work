import { config } from 'dotenv'
import dataBaseService from './database.services'
config()

class UserService {
  async getAllUsers() {
    const rs = await dataBaseService.user.find().toArray()
    return rs
  }
}

export const userService = new UserService()
