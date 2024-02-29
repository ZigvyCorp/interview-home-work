import { UserModel } from "../models/user.model";
import { CommentModel, ICommentsModel } from "../models/comment.model";
import { PostModel } from "../models/post.model";
import { NotFoundError } from "../errors/NotFoundError";

async function getAll() {
  const comments = await CommentModel.find({}).select(
    "id owner post content created_at -_id"
  );
  return comments;
}
async function create(comment: ICommentsModel) {
  const checkUser = await UserModel.findOne({ id: comment.owner });
  if (!checkUser)
    throw new NotFoundError(`owner: ${comment.owner} is not exist`);
  const checkPost = await PostModel.findOne({ id: comment.owner });
  if (!checkPost) throw new NotFoundError(`post: ${comment.post} is not exist`);
  const total = await CommentModel.countDocuments();
  comment.id = total + 1;
  const newComment = await new CommentModel(comment).save();
  await PostModel.findOneAndUpdate(
    { id: newComment.post },
    {
      $push: {
        comments: {
          _id: newComment._id,
        },
      },
    }
  );
  await UserModel.findOneAndUpdate(
    { id: newComment.owner },
    {
      $push: {
        comments: {
          _id: newComment._id,
        },
      },
    }
  );
  return newComment;
}
export { getAll, create };
