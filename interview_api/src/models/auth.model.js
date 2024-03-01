import user from "../data/user.json" assert { type: "json" };

export class AuthModel {
  static async login(username) {
    return user.find((item) => item.username == username);
  }
}
