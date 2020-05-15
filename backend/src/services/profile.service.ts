import { injectable } from "inversify";
import { User } from "../DAO/user";

@injectable()
export class ProfileService {
  async findById(_id: string) {
    const user = await User.findById(_id).select("-password");
    if (!user) return null;
    return user.toObject();
  }
}
