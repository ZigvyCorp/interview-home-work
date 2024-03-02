import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../config/generateToken";
import {
  IDecodedToken,
  IUser,
 
  IReqAuth,
} from "../config/interface";


const authCtrl = {
    register: async (req: Request, res: Response) => {
    try {
      const { fullName, email, password } = req.body;
      const userExist = await Users.findOne({ email });
      if (userExist)
        return res.status(400).send({ msg: "Email already in use" });
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = await Users.create({
        fullName,
        email,
        password: passwordHash,
      });
      if (newUser) {
        res.json({
          status: 200,
          _id: newUser.id,
          name: newUser.name,
        });
      } else {
        res.status(400).send({ msg: "Error" });
      }
    } catch (e: any) {
      res.status(500).send({ msg: "Internal Server Error" });
      console.log(e);
    }
  },


  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "This email does not exits." });

      // if user exists
      loginUser(user, password, res);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req: IReqAuth, res: Response) => {
    if (!req.user)
      return res.status(400).json({ msg: "Invalid Authentication." });

    try {
      res.clearCookie("refreshtoken", { path: `/api/refresh_token` });

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        {
          rf_token: "",
        }
      );

      return res.json({ msg: "Logged out!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: async (req: Request, res: Response) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

      const decoded = <IDecodedToken>(
        jwt.verify(rf_token, `${process.env.REFRESH_TOKEN_SECRET}`)
      );
      if (!decoded.id)
        return res.status(400).json({ msg: "Please login now!" });

      const user = await Users.findById(decoded.id).select(
        "-password +rf_token"
      );
      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      if (rf_token !== user.rf_token)
        return res.status(400).json({ msg: "Please login now!" });

      const access_token = generateAccessToken({ id: user._id });
      const refresh_token = generateRefreshToken({ id: user._id }, res);

      await Users.findOneAndUpdate(
        { _id: user._id },
        {
          rf_token: refresh_token,
        }
      );

      res.json({ access_token, user });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
};

const loginUser = async (user: IUser, password: string, res: Response) => {
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    let msgError = "Password is incorrect."

    return res.status(400).json({ msg: msgError });
  }

  const access_token = generateAccessToken({ id: user._id });
  const refresh_token = generateRefreshToken({ id: user._id }, res);

  await Users.findOneAndUpdate(
    { _id: user._id },
    {
      rf_token: refresh_token,
    }
  );

  res.json({
    msg: "Login Success!",
    access_token,
    user: { ...user._doc, password: "" },
  });
};
export default authCtrl;
