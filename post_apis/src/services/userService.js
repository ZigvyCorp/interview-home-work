import { User } from "../models/user.js";

//add data
export const createUserService = async (data) => {
  let result = await User.insertMany(data);
  return result;
};

export const getUsersService = async () => {
  let users = await User.find({}).exec();
  return users;
};
