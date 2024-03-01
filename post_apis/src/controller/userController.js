import { respsonseData } from "../config/response.js";
import { createUserService, getUsersService } from "../services/userService.js";

export const createNewUser = async (req, res) => {
  try {
    let result = await createUserService(req.body);
    respsonseData(res, "Successfully", result, 201);
  } catch (error) {
    throw new Error(error);
  }
};
export const getUsers = async (req, res) => {
  try {
    let result = await getUsersService();
    respsonseData(res, "Successfully", result, 200);
  } catch (error) {
    throw new Error(error);
  }
};
