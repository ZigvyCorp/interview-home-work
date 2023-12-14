const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");

let refreshTokens = [];
const authController = {
  //REGISTER
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const userRole = await Role.findOne({ name: "USER" });
      const newUser = await new User({
        username: req.body.username,
        password: hashed,
        email: req.body.email,
        roles: [userRole.id],
        name:req.body.name,
        dob:req.body.dob,

      });

      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
  },
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "1d" }
    );
  },
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: "365d" }
    );
  },
  //LOGIN
  login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username })
        .populate("roles", "name")
        .exec();

      if (!user) {
        return res.status(404).json("Username not found!");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("Password does not match!");
      }

      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });

        const { password, ...others } = user._doc;
        const userWithRoleName = {
          ...others,
          roles: user.roles.map((role) => role.name),
        };

        res
          .status(200)
          .json({ user: userWithRoleName, accessToken: accessToken });
      }
    } catch (error) {
      res.status(500).json(error);
      console.log(error)

    }
  },

  //REFRESH TOKEN
  RequestRefreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("Unauthorized !!");
    }
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh Token is not valid !");
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);
      refreshTokens.push(refreshToken);

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({ accessToken: newAccessToken });
    });
  },
  logout: async (req, res) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    res.status(200).json("Logged out !!");
  },
};
module.exports = authController;
