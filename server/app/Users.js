const errorHandler = require('../utils/APIError');
const mUsers = require('../models/Users');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.signUp = async (req, res, next) => {
  try {
    if (!req.body.username) {
      return res
        .status(400)
        .send(
          errorHandler.APIErrors(
            errorHandler.APIError('Please enter username', 400)
          )
        );
    }
    if (!req.body.password) {
      return res
        .status(400)
        .send(
          errorHandler.APIErrors(
            errorHandler.APIError('Please enter password', 400)
          )
        );
    }
    if (!req.body.name || req.body.name.length <= 2) {
      return res
        .status(400)
        .send(
          errorHandler.APIErrors(
            errorHandler.APIError('Please enter a valid name.', 400)
          )
        );
    }
    // Check if account is exists
    let userInfo = await mUsers.findOne({ username: req.body.username });
    if (userInfo) {
      return res
        .status(400)
        .send(
          errorHandler.APIErrors(
            errorHandler.APIError('Your username or email already exist.', 400)
          )
        );
    }
    // Encrypting password
    const saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    let newUser = {
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
      dob: req.body.dob,
    };
    await mUsers.create(newUser);
    return res.status(200).json({
      code: 200,
      message: 'Registration was successful!',
    });
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    let user = await mUsers.findOne({ username: req.body.username });
    if (user === null) {
      return res
        .status(400)
        .send(
          errorHandler.APIErrors(
            errorHandler.APIError('Invalid username or password.', 400)
          )
        );
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res
        .status(400)
        .send(
          errorHandler.APIErrors(
            errorHandler.APIError('Invalid username or password.', 400)
          )
        );
    } else {
      var token = generateToken(user);
      return res.status(200).json({
        code: 200,
        data: {
          token: token,
          userInfo: user,
        },
      });
    }
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.jwt = async (req, res, next) => {
  try {
    const token = req.body.token ? req.body.token : req.query.token;
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userInfo = await mUsers
      .findOne({ username: decoded.username })
      .select('-password');
    if (!userInfo) {
      return res
        .status(400)
        .json(errorHandler.APIError('Your token is invalid or expired.', 400));
    }
    req.user = userInfo;
    next();
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.getInfo = async (req, res, next) => {
  try {
    return res.status(200).json({
      code: 200,
      data: {
        userInfo: req.user,
      },
    });
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
};

module.exports.getUserById = async (req, res, next) => {
  try {
    const userInfo = await mUsers.findOne({_id : req.body.uid }).select('-password');
    return res.status(200).json({
      code: 200,
      data: {
        userInfo: userInfo
      },
    });
  } catch (e) {
    res
      .status(500)
      .json(
        errorHandler.APIErrors(errorHandler.APIError('Unexpected Error', 500))
      );
  }
}

module.exports.updateInfo = async (req, res, next) => {
  for (let i = 0; i < mUsers.editableField.length; i++) {
    const field = mUsers.editableField[i];
    if (!req.body[field]) {
      return res
        .status(400)
        .json(errorHandler.APIError(`${field} is require to update user`, 400));
    }
  }
  let userInfo = await mUsers.findOne({ _id: req.user.id }).select('-password');
  if (userInfo.username != req.user.username) {
    return res
      .status(403)
      .json(
        errorHandler.APIError(
          `You don't have permission to do this action`,
          403
        )
      );
  }
  userInfo.name = req.body.name;
  userInfo.dob = req.body.dob;
  await userInfo.save();
  return res.status(200).json({
    code: 200,
    data: {
      userInfo: userInfo,
    },
  });
};

function generateToken(user) {
  let payload = {
    id: user._id,
    username: user.username,
  };
  let token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}
