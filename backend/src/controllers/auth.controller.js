const catchAsync = require("../utils/catchAsync");
const userServices = require("./../services/user.service");
const authServices = require("./../services/auth.service");
const tokenServices = require("./../services/token.service");

const register = catchAsync(async (req, res, next) => {
  let user = await userServices.createUser(req.body);
  res.json({ data: user });
});

const login = catchAsync(async (req, res, next) => {
  let { username, password } = req.body;
  let user = await authServices.login(username, password);
  let token = await tokenServices.generateAuthToken(user);
  res.json({
    data: {
        user,
        token
    }
  })
});

module.exports = {
  register,
  login,
};
