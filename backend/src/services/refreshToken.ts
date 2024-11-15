import { RefreshToken } from "../models/refreshToken.model";
import { IUser } from "../types/users.type";
import { v4 as uuidv4 } from "uuid";
export const createRefreshToken = async (user: IUser) => {
  let expiredAt = new Date();
  expiredAt.setSeconds(
    expiredAt.getSeconds() + Number(process.env.JWT_REFRESH_EXPIRATION)
  );
  let token = uuidv4();

  let refreshTokenObj = await RefreshToken.create({
    token: token,
    user: user._id,
    expiredDate: expiredAt.getTime(),
  });
  return refreshTokenObj?.token;
};
