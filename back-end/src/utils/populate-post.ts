import User, { IUser } from "@/models/user";
import Comment, { IComment } from "@/models/comment";
import { Query } from "mongoose";

const populatePost = <T, U>(query: Query<T, U>) => {
  return query
    .populate<{ owner: IUser }>({ model: User.modelName, path: "owner" })
    .populate<{ comments: IComment[] }>({
      model: Comment.modelName,
      path: "comments",
      populate: { path: "owner" }
    });
};

export default populatePost;