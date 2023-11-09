import { UserDocument, UserModel } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { BadRequest } from "../helpers/error";
import { PaginationParams } from "../dto/pagination.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import moment from "moment";

export class UserService {
  async getAllUser({ perPage, page }: PaginationParams) {
    const skip = +perPage * +page - +perPage;

    const count = await UserModel.countDocuments();

    const users = await UserModel.find({}, { password: 0, __v: 0 })
      .skip(skip)
      .limit(+perPage);

    return { total: count, data: users };
  }

  async getUserById(id: string) {
    const user = await UserModel.find({ _id: +id }, { password: 0, __v: 0 });
    if (!user) {
      throw new BadRequest("User not found");
    }
    return user;
  }

  async createUser(payload: CreateUserDto) {
    const user = await UserModel.find({ username: payload.username });
    if (!user) {
      throw new BadRequest("Username is exist");
    }

    const id = await UserModel.count({});

    return await UserModel.create({
      ...payload,
      dob: moment(payload.dob).toDate(),
      _id: id + 1,
    });
  }

  async updateUser(payload: UpdateUserDto) {
    const user = await UserModel.findOne({ username: payload.username });
    if (!user) {
      throw new BadRequest("User not found");
    }

    user.name = payload.name;
    user.dob = moment(payload.dob).toDate();

    await user.save();

    return true;
  }

  async removeUserById(id: string) {
    const user = await UserModel.findOne({ _id: +id });
    if (!user) {
      throw new BadRequest("User not found");
    }
    await UserModel.deleteOne({ _id: +id });
    return true;
  }
}
