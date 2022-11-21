const { getUserByUsername } = require("./user.service");
const ApiError = require("./../utils/ApiError");
const httpStatus = require("http-status");

const login = async (username, password) => {
  let user = await getUserByUsername(username);
  if (!user || !user.isPasswordMatch(password)) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid username and password");
  }
  return user;
};

module.exports = {
  login,
};
