import User, { IUser } from "@/models/user";
import { Query } from "mongoose";

const populateComment = <T, U>(query: Query<T, U>) => {
  return query
    .populate<{ owner: IUser }>({ model: User.modelName, path: "owner" });
};

export default populateComment;