import { userModel } from "../models/user.m.js";
import { failedResponse, successResponse } from "../utils/response.js";

export const getAllUsers = (req, res) => {
  return userModel
    .find()
    .then((users) => res.status(200).json(successResponse({ users })))
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  return userModel
    .findOne({ id })
    .then((user) => res.status(200).json(successResponse({ user })))
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};
