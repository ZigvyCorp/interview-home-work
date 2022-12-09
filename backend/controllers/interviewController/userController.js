const User = require('../../models/interviewModals/userModel');
// const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    dob: req.body.dob,
  });

  //! xu ly truoc khi gui ve
  newUser.password = undefined;
  //! gui ve
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});
