const httpStatus = require("http-status");
const UserModel = require("./../models/user.model");
const ApiError = require("./../utils/ApiError");
/**
 * @param  {} userBody
 * @return  {Promise<Object>}
 */
const createUser = async (userBody) => {
  console.log(userBody);
  if (await UserModel.isUsernameTaken(userBody.username)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "username already taken");
  }

  return UserModel.create(userBody);
};

/**
 * @param  {} username
 * @return  {Promise<UserModel>} =>{letuser=awaitUserModel.findOne({username}
 */
const getUserByUsername = async (username) => {
  let user = await UserModel.findOne({
    username
  });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};

module.exports = {
  createUser,
  getUserByUsername,
};