import User, { IUser } from "../models/userModel";

export class UserService {
  static async getAllUsers() {
    return await User.find();
  }

  static async getUserById(id: string) {
    return await User.findById(id);
  }

  static async createUser(userData: IUser) {
    const user = new User(userData);
    return await user.save();
  }

  static async updateUser(id: string, userData: Partial<IUser>) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  }

  static async deleteUser(id: string) {
    return await User.findByIdAndDelete(id);
  }
}
