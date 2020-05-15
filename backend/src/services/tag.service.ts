import { injectable } from "inversify";
import { Tag } from "../DAO/tag";

@injectable()
export class TagService {
  async addTag(name: string) {
    const tag = new Tag({ name });
    await tag.save();
    return tag.toObject();
  }
}
