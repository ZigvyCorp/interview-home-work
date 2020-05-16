import { injectable } from "inversify";
import { User } from "../models/user";
import { hashString } from "../utils/crypto";

@injectable()
export class AuthService {
  async findWithCredentials(username: string, password: string) {
    const user = await User.findOne({
      username,
      password: hashString(password),
    }).select("-password");
    if (!user) return null;
    return user.toObject();
  }

  async usernameExists(username: string) {
    const existingUser = await User.findOne({
      username: username,
    });
    return !!existingUser;
  }

  async createUser(data: any) {
    const user = new User({
      ...data,
      password: hashString(data.password),
    });
    const userObj = await (await user.save()).toObject();
    delete userObj["password"];
    return userObj;
  }
}
