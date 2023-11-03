import { userService } from '../services';
import { catchAsync } from '../utils/catchAsync';
import { errorResponse, successResponse } from '../utils/response';

const getAll = catchAsync(async (req, res) => {
  try {
    const users = await userService.queryUsers(req.body);

    successResponse({ res, data: users });
  } catch (error: any) {
    errorResponse({ res, message: error });
  }
});

const getById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    successResponse({ res, data: user });
  } catch (error) {
    errorResponse({ res });
  }
});

export const userController = { getAll, getById };
