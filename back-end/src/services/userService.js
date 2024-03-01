const { UserModel } = require("../models");
const { APIError, STATUS_CODES } = require("../utils/errors/error-handler");
class UserService {
  async find() {
    try {
      const existed = await UserModel.find();
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Users");
    }
  }
  async findById({ id }) {
    try {
      const existed = await UserModel.findById({ _id: id });
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find User");
    }
  }
  async deleteById({ id }) {
    try {
      const existed = await UserModel.deleteOne({ _id: id });
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Delete User");
    }
  }

  async create({ username, password, name, dob }) {
    try {
      const user = new UserModel({
        username,
        password,
        name,
        dob,
      });

      const savedUser = await user.save();
      return savedUser;
    } catch (error) {
      console.log(error);
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Create User");
    }
  }
  async update({ userId, username, password, name, dob }) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        { _id: userId },
        {
          username,
          password,
          name,
          dob,
        }
      );
      return updatedUser;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Update User");
    }
  }
}

module.exports = UserService;
