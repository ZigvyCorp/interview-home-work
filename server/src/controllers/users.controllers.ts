import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ObjectId } from 'mongodb';

import { USERS_MESSAGES } from '~/constants/messages';
import { RefreshTokenReqBody, RegisterReqBody, TokenPayload } from '~/models/requests/User.requests';
import User from '~/models/schemas/User.schema';
import usersService from '~/services/users.services';

// Đăng ký
export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  const { user } = await usersService.register(req.body);
  return res.json({
    message: USERS_MESSAGES.REGISTRATION_SUCCESSFUL,
    data: {
      user
    }
  });
};

// Đăng nhập
export const loginController = async (req: Request, res: Response) => {
  const user = req.user as User;
  const { _id, role } = user;
  const { access_token, refresh_token } = await usersService.login({ user_id: (_id as ObjectId).toString(), role });
  return res.json({
    message: USERS_MESSAGES.LOGIN_SUCCESSFUL,
    data: {
      access_token,
      refresh_token,
      user
    }
  });
};

// Đăng xuất
export const logoutController = async (req: Request, res: Response) => {
  const { refresh_token } = req.body;
  await usersService.logout(refresh_token);
  return res.json({
    message: USERS_MESSAGES.LOGOUT_SUCCESSFUL
  });
};

// Refresh token
export const refreshTokenController = async (
  req: Request<ParamsDictionary, any, RefreshTokenReqBody>,
  res: Response
) => {
  const { exp, user_id, role } = req.decoded_refresh_token as TokenPayload;
  const { access_token, refresh_token } = await usersService.refreshToken({
    refresh_token: req.body.refresh_token,
    user_id,
    exp,
    role
  });
  return res.json({
    message: USERS_MESSAGES.REFRESH_TOKEN_SUCCESSFUL,
    data: {
      access_token,
      refresh_token
    }
  });
};
