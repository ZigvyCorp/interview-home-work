import { NextFunction, Request, Response } from "express";
import { getAll, getById, create, login } from "../services/user.service";
import { IUsersModel } from "../models/user.model";
import { BadRequestError } from "../errors/BadRequestError";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query;
    const users = await getAll(query);

    return res.status(200).json(users).end();
  } catch (e) {
    next(e);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getById(req.params.id);

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.username || !req.body.password) return res.sendStatus(400);
    const user: IUsersModel = req.body;
    const newUser = await create(user);
    return newUser;
  } catch (e) {
    next(e);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new BadRequestError("username or password is required");
    const user = await login(username, password);
    // //Todo JWT
    // res.cookie("Auth", "secret", {
    //   domain: "localhost",
    //   path: "/",
    //   maxAge: 100000,
    // });
    return res.status(200).json(user).end();
  } catch (e) {
    next(e);
  }
};
