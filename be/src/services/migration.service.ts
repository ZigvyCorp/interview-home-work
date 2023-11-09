import { UserDocument, UserModel } from "../models/user.model";
import fs from "fs";
import moment from "moment";
import path from "path";
import { CommentModel } from "../models/comment.model";
import { PostModel } from "../models/post.model";

export class MigrationService {
  static async migrationDataUser() {
    const filePath = path.resolve(__dirname, "../../../data/users.json");
    const dataUser = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await UserModel.deleteMany({});

    const data = dataUser.map((user: any) => {
      return {
        ...user,
        _id: user.id.toString(),
        dob: moment(user.bod).toDate(),
      };
    });
    await UserModel.insertMany(data);
  }

  static async migrationDataComment() {
    const filePath = path.resolve(__dirname, "../../../data/comments.json");
    const dataUser = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await CommentModel.deleteMany({});

    const data = dataUser.map((user: any) => {
      return {
        ...user,
        _id: user.id.toString(),
        dob: moment(user.bod).toDate(),
      };
    });
    await CommentModel.insertMany(data);
  }

  static async migrationDataPost() {
    const filePath = path.resolve(__dirname, "../../../data/posts.json");
    const dataUser = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await PostModel.deleteMany({});

    const data = dataUser.map((user: any) => {
      return {
        ...user,
        _id: user.id.toString(),
        dob: moment(user.bod).toDate(),
      };
    });
    await PostModel.insertMany(data);
  }

  static async migrationAllData() {
    await Promise.all([
      this.migrationDataComment,
      this.migrationDataPost,
      this.migrationDataUser,
    ]);
  }
}
