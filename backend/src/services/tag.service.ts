import { injectable } from "inversify";
import { Tag } from "../DAO/tag";
import { FilterRequest } from "../models/requests/filter-request";

@injectable()
export class TagService {
  async addTag(name: string) {
    const exist = await Tag.findOne({
      name,
    });
    if (exist) return null;
    const tag = new Tag({ name });
    await tag.save();
    return tag.toObject();
  }

  async getTags(filter: FilterRequest = new FilterRequest()) {
    const tags = await Tag.find({
      name: { $regex: ".*" + filter.key?.toLowerCase() + ".*" },
    })
      .skip(filter.page * filter.pageSize)
      .limit(filter.pageSize);
    const count = await Tag.count({
      name: { $regex: ".*" + filter.key + ".*" },
    });
    return [tags.map((tag) => tag.toObject()), count];
  }
}
