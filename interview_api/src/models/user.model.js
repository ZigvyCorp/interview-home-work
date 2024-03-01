import { apiGet } from "../utils/apiRequest.js";
import user from "../data/user.json" assert { type: "json" };


export class UserModel {
  static async getUsers() {
    const users = await apiGet("/users");
    return users;
  }
  static async getUserById(id) {
    return user.filter((item) => id == item.id);
  }
}
