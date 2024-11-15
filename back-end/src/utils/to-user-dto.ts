import { UserDto } from "@/models/dtos/user-dto";
import { IUser } from "@/models/user";
import { Document } from "mongoose";

export const toUserDto = (user: IUser): UserDto => {
  return {
    id: user._id.toString(),
    username: user.username,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
};