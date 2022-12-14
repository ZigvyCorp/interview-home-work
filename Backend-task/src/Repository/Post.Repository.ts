import { PostCreateRequestDTO } from "../Models/DTO/Post/Post.Create.Request.DTO";
import { PostReponseDTO } from "../Models/DTO/Post/Post.Reponse.DTO";
import { PostUpdateRequestDTO } from "../Models/DTO/Post/Post.Update.Request.DTO";
const PostSchema = require("../Schema/Post.Schema");
export class PostReposistory {
  public async GetAll() {
    const list = await PostSchema.find({});

    if (!list) return null;
    return list;
  }

  public async GetSingle(id: string) {
    const obj = await PostSchema.findById(id);
    if (!obj) return null;
    return obj;
  }

  public async Create(data: PostCreateRequestDTO) {
    const obj = new PostSchema(data);
    await obj.save();
    return obj;
  }
  public async UpdateBy(id: string, data: PostUpdateRequestDTO) {
    var obj = await PostSchema.updateOne({ _id: id }, data);

    return obj.modifiedCount > 0 ?? null;
  }

  public async DeleteById(id: string) {
    var obj = await PostSchema.updateOne({ _id: id }, { is_deleted: true });
    return obj.modifiedCount == 1 ?? null;
  }

  public async HardDeleteById(id: string) {
    const obj = await PostSchema.deleteOne({ _id: id });
    return obj.deletedCount == 1 ?? null;
  }
}

export default new PostReposistory();
