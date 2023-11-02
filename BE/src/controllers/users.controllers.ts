import { NextFunction, Request, Response } from 'express'
import { USER_REPONSE_MESSAGES } from '~/constants/messages.contants'
import { userService } from '~/services/users.services'

export const getAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
  const rs = await userService.getAllUsers()
  return res.status(200).json({
    message: USER_REPONSE_MESSAGES.GET_ALL_USERS.SUCCESS,
    data: rs
  })
}
