import { injectable } from "inversify";
import { Post } from "../models/post";
import { FilterRequest } from "../models/requests/filter-request";
import { User } from "../models/user";

@injectable()
export class ProfileService {
  async updateAvatar(id: string, path: string) {
    const updatedProfile = await User.findByIdAndUpdate(
      id,
      {
        avatar: path,
      },
      { new: true }
    ).select("-username -password");
    return updatedProfile;
  }

  async getUserPosts(id: string, filter: FilterRequest = new FilterRequest()) {
    let findCondition: any = {
      author: id,
    };
    if (filter.key) {
      findCondition.$or = [
        {
          title: { $regex: ".*" + filter.key + ".*", $options: "i" },
        },
        {
          tags: { $regex: ".*" + filter.key + ".*", $options: "i" },
        },
      ];
    }
    const posts = await Post.find(findCondition)
      .skip(filter.page * filter.pageSize)
      .limit(filter.pageSize)
      .populate("author", "-username -password");
    const count = await Post.count({
      author: id,
    });
    return [posts, count];
  }

  async updateProfile(id: string, data: any) {
    delete data["username"];
    delete data["password"];
    const updated = await User.findByIdAndUpdate(id, data, {
      new: true,
    }).select("-username -password");
    if (!updated) throw new Error("User not found");
    return updated.toObject();
  }

  async findById(id: string, withPosts: boolean = false) {
    return (await User.findById(id).select("-username -password"))?.toObject();
  }
}
