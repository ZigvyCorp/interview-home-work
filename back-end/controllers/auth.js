import dotenv from "dotenv";
import { authModel } from "../model/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

export const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await authModel.findOne({ email: email });

      if (!user)
        return res.status(400).json({ msg: "This is email does not exits" });

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ msg: "This is not a valid password" });
      }

      const accessToken = createAccessToken({ id: user._id });
      const refreshToken = createRefreshToken({ id: user._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/api/v1/auth/refresh-token",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
      });

      const { password: passwordHidden, ...rest } = user._doc;

      return res.status(200).json({
        accessToken,
        refreshToken,
        user: { ...rest },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  register: async (req, res) => {
    try {
      const { email, password, firstname, lastname } = req.body;
      const username = `${firstname} ${lastname}`;

      const user = await authModel.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: "This is email is alredeay exits" });
      }

      if (password.length < 6) {
        return res.status(400).json({ msg: "Please enter your password > 6" });
      }
      const passwordHash = await bcrypt.hash(password, 12);

      res.json({
        msg: "Register Success!.",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshToken", { path: "/api/v1/auth/refresh-token" });
      return res.json({ msg: "Logged out." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshToken: async (req, res) => {
    try {
      const getRefreshToken = req.headers.cookie;
      if (!getRefreshToken)
        return res.status(401).json({ msg: "You are not authenticated!" });
      const refreshToken = getRefreshToken.split("=")[1];
      jwt.verify(
        refreshToken,
        process.env.YOUR_REFRESH_TOKEN_KEY,
        (err, user) => {
          if (err)
            return res.status(401).json({ msg: "Refresh token is expires" });
          const newAsscessToken = createAccessToken({ id: user.id });

          return res.status(200).json({ asscessToken: newAsscessToken });
        },
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.YOUR_ACCESS_TOKEN_KEY, {
    expiresIn: "5m",
  });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.YOUR_REFRESH_TOKEN_KEY, {
    expiresIn: "10m",
  });
};

