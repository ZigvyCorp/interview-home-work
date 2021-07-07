const UserModel = require('./model');
const tokenHelper = require('../../helper/authen');
const utility = require('../../helper/utility');

module.exports = {
  validateLogin: async (req, res, next) => {
    try {
      /*
      * header example
      *  Authorization: Bearer < access_token >
      *  email: < email >
      */
      let token = req.get('Authorization');
      token = utility.stringValidate(token);

      if (!token) {
        return res.error('Missing require in Header');
      }

      token = (token.replace('Bearer', '')).trim();
      let decoded = tokenHelper.verifyToken(token);
      if (!decoded || !decoded._id) {
        return res.error('Please login your account.');
      }

      let account = await UserModel.findById(decoded._id);
      if (!account) {
        return res.error('Token are invalid.');
      }
      req.adminAccount = { ...account, isTokenExpired: decoded.isTokenExpired || false };
      return next();
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res) => {
    try {
      const data = req.body;
      if (!data.email || !data.password) {
        return res.error('missing require field!!');
      }
      let user = await UserModel.findOne({email: data.email});
      if (!user) {
        return res.error({message: 'Email không tồn tại trong hệ thống.'});
      }
      if (!user.comparePassword(data.password)) {
        return res.error('password is incorrect!');
      }
      // login successful
      const token = tokenHelper.generateToken({_id: user._id});
      handleUserBeforeResponse(user);
      return res.success({user: user, token: token});
    }catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },
  register: async (req, res) => {
    try {
      const userName = req.body.userName;
      const email = req.body.email;
      const password = req.body.password;
      const name = req.body.name;
      if (!userName || !email || !password) {
        return res.error('missing require fields!!');
      }

      const [userFoundWithUserName, userFoundWithEmail] = await Promise.all([
        UserModel.findOne({userName: userName}),
        UserModel.findOne({email: email})]);

      if (!utility.isValidEmail(email)) {
        return res.error('email is invalid!!');
      }
      if (userFoundWithUserName || userFoundWithEmail) {
        return res.error('userName or email exist already!!');
      }
      const dataUser = {
        userName: userName,
        email: email,
        password: password,
        name: name,
      };
      const userSaved = await UserModel.create(dataUser);

      handleUserBeforeResponse(userSaved);

      return res.success(userSaved);
    }catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },
  getUser: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.error('missing require fields!!');
      }

      const user = await UserModel.findById(id);
      if (!user || !user._id) {
        return res.error('missing require fields!!');
      }
      handleUserBeforeResponse(user);
      return res.success(user);
    }catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },
};

let handleUserBeforeResponse = (user) => {
  user.password = undefined;
  user.createdAt = undefined;
  user.updatedAt = undefined;
  user.__v = undefined;
};
