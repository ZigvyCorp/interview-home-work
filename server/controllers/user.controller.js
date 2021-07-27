import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";



const userController = {
  register: async (req, res) => {
    try {
      const { name, username, password, dob } = req.body;

      if (!name || !username || !password) return res.status(400).json({ message: "Please fill in all fields." });


      const user = await User.findOne({ username });
      if (user) return res.status(400).json({ message: "This email already exists." });

      if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters" });

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new User({ name, username, password: passwordHash, dob });
      await newUser.save();

      res.status(200).json({ message: "Register success! " });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: "This username does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Password is incorrect." });

      const refresh_token = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/v1/users/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: "Login successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAccessToken: async (req, res) => {
    try {
      const refresh_token = req.cookies.refreshtoken;

      if (!refresh_token) return res.status(400).json({ message: "Haven't token.Please login now!" });

      jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ message: "Please login now!" });

        const access_token = createAccessToken({ id: user.id });

        res.status(200).json({ access_token: access_token });
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserInfo: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/v1/users/refresh_token" });
      res.status(200).json({ message: "Logged out!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

};


const createAccessToken = (payload) => jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
const createRefreshToken = (payload) => jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

export default userController;