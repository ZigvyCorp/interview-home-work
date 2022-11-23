const { getUserByUsername } = require("./user.service");
const ApiError = require("./../utils/ApiError");
const httpStatus = require("http-status");

const login = async (username, password) => {
  let user = await getUserByUsername(username);
  let checkPassword = await user.isPasswordMatch(password);
  if (!user || !checkPassword) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Invalid username and password"
    );
  }
  return { ...user._doc, password: "private" };
};

module.exports = {
  login,
};
